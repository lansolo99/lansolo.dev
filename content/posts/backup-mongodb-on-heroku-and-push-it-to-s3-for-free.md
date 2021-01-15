---
title: Backup MongoDB on Heroku and push it to S3 for free
type: 'article'
imgCover: '/img/posts/backup-mongodb-on-heroku-and-push-it-to-s3-for-free.jpg'
tags: [node, express, S3]
createdAt: 2020-11-08
---

This walkthrough is about building a small backup system on [Heroku](https://www.heroku.com/), using [MongoDB](https://www.mongodb.com/) free tier, and [AWS S3 storage](https://aws.amazon.com/s3/?nc1=h_ls).
<!--more-->

## Node.js API

I recently deep dived in Node.js to fill my backend needs regarding operations such as mail routing, and database storage, other than PaaS like [Firebase](https://firebase.google.com/). So I picked one of the most popular stack which is Express + MongoDB, coupled with a Nuxt.js front-end, what is called the MEVN stack.

It took time to glue all the pieces together understanding how to architecture a complete API. I followed the very concise [Node.js API masterclass](https://www.udemy.com/course/nodejs-api-masterclass/?referralCode=F95A0D3B9CA1DB648F55) from Brad Traversy which of course I recommend. Nearly all the aspects are covered, but I found the recomended deployment path to Digital Ocean a bit too complicated.

## Heroku

I used Heroku in the past to deploy a server-side rendered Nuxt application with ease, thanks to the simplified admin and deployment process through the Heroku CLI. The only drawback is that, on free tier, the server automatically enter in sleep mode if url is not pinged every 30mn, which can be bypassed using a cron solution. Though it’s only suitable for small projects. 

## MongoDB backup

I handle all the database CRUD operations with Mongoose driver, but as far as I know, it’s not intended to perform a database backup.  MongoDB has a backup system built-in, but not available on the free tier. In those conditions, the recomended way is to use [Mongotools](https://docs.mongodb.com/tools/), which encompasses multiples utilities such as mongodump, mongoexport, mongorestore and others. 

## Mongotools

Using these tools on the command line is quite easy. Of course, you would need to install Mongotools locally before.  Here is an example to backup an Atlas database:

```bash
mongodump --uri mongodb+srv://DATABASENAME:USERPASSWORD@cluster0.p9x9r.mongodb.net/DATABASENAME --collection COLLECTIONNAME
```

Without the path flag, it creates 2 backup files in a dump/&lt;projectname&gt; at the root :

* a .bson file (all the document data)
* a .metadata.json file

It’s ok to perform this operation locally but what we need is to execute this operation on the server on a daily basis.

## Execute a shell command on the server without CLI

To perform this, we need the exec() command, which is part of the Node.js child-process module. I wanted to create both a CSV export and a database backup, so I needed to handle multiple shell commands consecutively. 

I created a module called shellHelper.js exporting 2 functions : 

```js{}
const childProcess = require('child_process');

// Execute a single shell command where "cmd" is a string
exports.exec = function (cmd, cb) {

const parts = cmd.split(/\s+/g);

const p = childProcess.spawn(parts[0], parts.slice(1), { stdio: 'inherit' });
p.on('exit', (code) => {
let err = null;
if (code) {
err = new Error(`command "${cmd}" exited with wrong status code "${code}"`);
err.code = code;
err.cmd = cmd;
}

if (cb) cb(err);
});
};


// Execute multiple commands in series
exports.series = function (cmds, cb) {

const execNext = function () {
exports.exec(cmds.shift(), (err) => {
if (err) {
cb(err);
} else if (cmds.length) execNext();
else cb(null);
});
};
execNext();
};
```

Then I just perform a call to the series function passing an array containing 2 shell commands : 

```js{}
shell.series([
'mongodump --uri mongodump --uri MONGOURLCOMPLETESTRING --collection COLLECTIONNAME',
'mongoexport --uri MONGOURLCOMPLETESTRING --collection COLLECTIONNAME --type csv --out ./path/to/.csv',
], (err) => {
console.log('Mongo Backup + Exports created’);
})
```

Now we should have both new file created in our project structure.


## Using mongotools on Heroku


By default, Heroku does not provide mongotools, so any command calling mongotools will fail. To do this, we need to use what Heroku calls a [buildpack](https://devcenter.heroku.com/articles/buildpacks), the one we need is called [heroku-buildpack-mongo](https://devcenter.heroku.com/articles/buildpacks). A Node.js Heroku already have the heroku/nodejs buildpack. We need to install this new buildpack following a precise order :  

* heroku-buildpack-mongo
* heroku/nodejs

Installing Heroku buildpacks in the righ order:

```bash
heroku buildpacks:add https://github.com/uhray/heroku-buildpack-mongo.git
heroku buildpacks:add heroku/nodejs
```

You can list you current buildpacks with this command:

1. https://github.com/uhray/heroku-buildpack-mongo.git
2. heroku/nodejs

We are now equipped to perform shell commands on Heroku using mongotools!

## Uploading to amazon s3 storage

Uploading these new files on an external storage such as S3 is necessary because Heroku use an ephemeral file system, so that new files will be wiped out as soon as the server restarts.

I just adapted one of the available code examples to send my generated files onto an S3 storage. This code is placed in the shell.series callback, so that it’s executed once file are generated:

```js{}
// Config
aws.config.update({ region: 'us-east-1' });

const s3 = new aws.S3({
accessKeyId: process.env.AWS_ACCESS_KEY_ID,
secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const uploadFile = async (filePath, fileName) => {
console.log('uploading to s3...');

// File
const fileStream = fs.createReadStream(`${filePath}${fileName}`);
fileStream.on('error', (fsErr) => {
console.log('File Error', fsErr);
});

// Payload
const uploadParams = {
Bucket: process.env.S3_BUCKET_NAME,
Key: fileName,
Body: fileStream,
};

// Upload
await s3.upload(uploadParams, (s3err, data) => {
if (s3err) {
console.log('Error', s3err);
} if (data) {
console.log(`Uploaded ${fileName} with success`, data.Location);
}
});
};

// Send files
uploadFile('./dump/DATABASENAME/', ‘COLLECTIONNAME.bson');
uploadFile('./exports/csv/', 'export.csv');
```

## Schedule the backups

Now the last part is to schedule the task to whatever frequency you would like it to execute. I chose to go with a daily backup at 1AM. It’s just a matter of putting the whole utility function inside a cron wrapper. To make so, I used the node-cron module.

Dead simple: trigger it inside the express listening event at the root:

```js{}
var cron = require('node-cron');

const server = app.listen(port, () => {
    if (process.env.NODE_ENV === 'production') {
    // Cron MongoDump + backup
    mongodumbBackup();
    }
})
```

 I gathered all this boilerplate inside a [gist](https://gist.github.com/lansolo99/fb2983c7f17aac23f5261b3fed0da3b6).
