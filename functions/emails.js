const functions = require('firebase-functions')
const admin = require('firebase-admin')
const adminEmails = admin.initializeApp(
  functions.config().firebase,
  'adminEmails'
)

// Send In Blue mail API
const SibApiV3Sdk = require('sib-api-v3-sdk')
const defaultClient = SibApiV3Sdk.ApiClient.instance
const apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = functions.config().sib.api_key

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail()
const sendSmtpEmailInternal = new SibApiV3Sdk.SendSmtpEmail()

exports.sendWelcomeEmail = functions
  .region('europe-west1')
  .firestore.document('users/{userUid}')
  .onCreate((snaphot, context) => {
    const user = snaphot.data()

    try {
      emailParams = {
        to: [
          {
            email: 'lansolo99@hotmail.fr',
            name: `${user.surname} ${user.name}`,
          },
        ],
        templateId: 1,
        params: {
          name: user.surname,
          email: user.email,
        },
        headers: {
          'api-key': apiKey.apiKey,
          accept: 'application/json',
          'content-type': 'application/json',
        },
      }

      const sibTransaction = apiInstance.sendTransacEmail(emailParams)
      console.log(sibTransaction)
    } catch (error) {
      console.log(error)
      throw error
    }
  })
