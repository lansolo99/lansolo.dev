const admin = require('firebase-admin')
const serviceAccount = require('./storylunch-firebase-adminsdk-oevwy-6879746a50.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'storylunch.appspot.com',
})

const bucket = admin.storage().bucket()

const deleteAllUserFolder = async () => {
  try {
    await bucket.deleteFiles({
      prefix: `users/`,
    })
    console.log('user folder deleted')
  } catch (error) {
    console.log(error)
    process.exit()
  }
}

deleteAllUserFolder()
