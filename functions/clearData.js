const functions = require('firebase-functions')
const admin = require('firebase-admin')
const serviceAccount = require('./storylunch-firebase-adminsdk-oevwy-6879746a50.json')

const adminClear = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://storylunch.firebaseio.com',
  storageBucket: 'storylunch.appspot.com'
},'adminClear')
  
  

exports.deleteUser = functions.region('europe-west1').https.onCall(async (data, context) => {
  try {
    await adminClear
    .auth()
    .deleteUser(data)

  } catch (error) {
    console.log(error)
    throw error
  }
})

exports.deleteUserInfos = functions.region('europe-west1').https.onCall(async (data, context) => {
  console.log('deleteUserInfos callable');
  console.log('data firestore:', data);
  try {
    await adminClear
      .firestore()
      .collection('users')
      .doc(data)
      .delete()
    
  } catch (error) {
    console.log(error)
    throw error
  }
})

exports.deleteUserStorage = functions.region('europe-west1').https.onCall(async (data, context) => {
  console.log('data from user storage: ', data);
  try {
    const bucket = adminClear.storage().bucket()
    await bucket.deleteFiles({
    prefix: `users/${data}/`,
    })  
    
  } catch (error) {
    console.log(error)
    throw error
  }
})

  exports.deleteUserStorageAvatar = functions.region('europe-west1').https.onCall(async (data, context) => {
    try {
      const bucket = adminClear.storage().bucket()
      await bucket.deleteFiles({
      prefix: `users/${data.id}/avatar/`,
      })  
      
    } catch (error) {
      console.log(error)
      throw error
    }
  })




  
