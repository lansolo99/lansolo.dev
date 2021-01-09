const admin = require('firebase-admin')

const serviceAccount = require('./storylunch-firebase-adminsdk-oevwy-6879746a50.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://storylunch.firebaseio.com',
  projectId: process.env.FIREBASE_PROJECTID,
})

const deleteUsers = (userIds) => {
  admin
    .auth()
    .deleteUsers(userIds)
    .then((deleteUsersResult) => {
      console.log(
        `Successfully deleted ${deleteUsersResult.successCount} users`
      )
      console.log(`Failed to delete ${deleteUsersResult.failureCount} users`)
      deleteUsersResult.errors.forEach((err) => {
        console.log(err.error.toJSON())
      })
      process.exit()
    })
    .catch((error) => {
      console.log('Error deleting users:', error)
      process.exit()
    })
}

const listAndDeleteAllUsers = (nextPageToken) => {
  // List batch of users, 1000 at a time.
  admin
    .auth()
    .listUsers(1000, nextPageToken)
    .then((listUsersResult) => {
      const userIds = listUsersResult.users.map((userRecord) => {
        return userRecord.uid
      })

      if (userIds.length) {
        console.log('userIds:', userIds)
        deleteUsers(userIds)
      } else {
        console.log('no users to delete')
        process.exit()
      }
    })
    .catch((error) => {
      console.log('Error listing users:', error)
      process.exit()
    })
}

listAndDeleteAllUsers()
