const functions = require('firebase-functions')

const admin = require('firebase-admin')
const adminSetUser = admin.initializeApp(functions.config().firebase, 'adminSetUser')


exports.setUserUrl = functions.region('europe-west1').https.onCall(async (data, context) => {
  try {
    const checkUsersUrl = async () => {
      const usersRef = adminSetUser.firestore().collection('users')
  
      let suffix = ''
      let query
      let userUrl
  
      /* eslint-disable no-await-in-loop */
      do {
        query = await usersRef
          .where('url', '==', `${data.surname}${data.name}${suffix}`)
          .get()
  
        userUrl = `${data.surname}${data.name}${suffix}`
        suffix++
      } while (!query.empty)
  
      return userUrl
    }

    const userUrl = await checkUsersUrl()
  
    const update = await adminSetUser
      .firestore()
      .collection('users')
      .doc(data.id)
      .update({ url: userUrl })
  
    return userUrl


  } catch (error) {
    throw `error with serUserUrl: ${error}`
  }
    
  
    
  })