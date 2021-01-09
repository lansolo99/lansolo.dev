const functions = require('firebase-functions')
const admin = require('firebase-admin')
const { users } = require('./data/dataFeed')

const adminPopulate = admin.initializeApp(
  functions.config().firebase
  ,'adminPopulate')

exports.populateAuthUsers = functions.region('europe-west1').https.onRequest(async (req, res) => {

    try {
  
      const results = [];
      for (let user of users) {
        const result = await adminPopulate.auth().createUser(user);
        results.push(result);
      }
      console.log('users created in auth')

      const batch = adminPopulate.firestore().batch()

        users.forEach((doc) => {
          batch.set(adminPopulate.firestore().collection('users').doc(doc.uid), doc)
        })
      
       await batch.commit()
          console.log('users imported in firestore')
        

        return res.status(200).send(results);
      
    } catch (error) {
      console.error('Error: ', error);
      return res.status(500).send(error);
    }
  });