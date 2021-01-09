const functions = require('firebase-functions')
const { Storage } = require("@google-cloud/storage");
const gcs = new Storage();
const sharp = require("sharp");
const fs = require("fs-extra");
const os = require("os");
const path = require("path");
const uuid = require('uuid');

exports.resizeImages = functions.region('europe-west1').https.onCall(async (data, context) => {
    try {
        // generate a unique name we'll use for the temp directories
        const uniqueName = uuid.v1();
  
        // Get the bucket original image was uploaded to
        const bucket = gcs.bucket(data.bucket);
        
        // Set up bucket directory 
        // const filePath = data.name;
        const filePath = data.fullPath;
        
        // const fileName = filePath.split("/").pop();
        const fileName = data.name;
        const bucketDir = path.dirname(filePath);
        
  
        // create some temp working directories to process images
        const workingDir = path.join(os.tmpdir(), `images_${uniqueName}`);
        const tmpFilePath = path.join(workingDir, `source_${uniqueName}.png`);
  
        // We dont want to process images already resized
        if (fileName.includes("image@") || !data.contentType.includes("image")) {
            console.log("Exiting image resizer!");
            return false;
        }
  
        // Ensure directory exists
        await fs.ensureDir(workingDir);
  
        // Download source file
        await bucket.file(filePath).download({
            destination: tmpFilePath
        });
  
        // Resize images
        const sizes = [1000];
        const uploadPromises = sizes.map(async size => {
            const thumbName = `optimized_${fileName}`;
            const thumbPath = path.join(workingDir, thumbName);
  
  
            
                // Square aspect ratio
                // Good for profile images
                await sharp(tmpFilePath)
                    .resize(size, size)
                    .toFile(thumbPath);
            
  
            // upload to original bucket
            return bucket.upload(thumbPath, {
                destination: path.join(bucketDir, thumbName)
            });
        });
  
        // Process promises outside of the loop for performance purposes
        await Promise.all(uploadPromises);
  
        // Remove the temp directories
        await fs.remove(workingDir);
        await fs.remove(bucketDir);
  
        return Promise.resolve();
    } catch (error) {
        // If we have an error, return it
        // This will allow us to view it in the firebase function logs
        return Promise.reject(error);
    }
  });
  