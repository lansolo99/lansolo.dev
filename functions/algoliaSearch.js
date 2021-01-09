const functions = require('firebase-functions')
const algoliasearch = require('algoliasearch');

const admin = require('firebase-admin')
const adminAlgolia = admin.initializeApp(functions.config().firebase, 'adminAlgolia')

const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
const ALGOLIA_SEARCH_KEY = functions.config().algolia.search_key;
const ALGOLIA_INDEX_NAME = 'users';

exports.indexUsers = functions.region('europe-west1').firestore.document('users/{userUid}').onWrite((change, context) => {
  
  const document = change.after.exists ? change.after.data() : null
  console.log('document: ',document);

  const { userUid } = context.params

  const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);
  const index = client.initIndex(ALGOLIA_INDEX_NAME);

  index.setSettings({
    searchableAttributes: [
      'name',
      'surname'
    ],
    attributesForFaceting: [
      'skills'
    ]
  })

  function deleteObject() {
    return index
      .deleteObject(userUid)
      .then(() => {
        return true
      })
      .catch((error) => {
        console.error('Error deleting userUid from index', error)
      })
  }

  function saveObject () {
    return index.saveObject({
        objectID: userUid,
        name: document.name,
        surname: document.surname,
        url: document.url,
        avatar: document.avatar,
        email: document.email,
        skills: document.skills
      })
      .then(() => {
        return true
      })
      .catch((error) => {
        console.error('Error indexing blog', error)
      })
  }

  
  if (!document) {
    console.log('document is null, -> deleted object');
    return deleteObject(userUid)
  } else {
    console.log('document ok -> save object');
    return saveObject()
    
  }



  })