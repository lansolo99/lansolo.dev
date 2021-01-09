const dotenv = require('dotenv')
dotenv.config()

const algoliasearch = require('algoliasearch')

const ALGOLIA_ID = process.env.ALGOLIA_APPLICATION_ID
const ALGOLIA_ADMIN_KEY = process.env.ALGOLIA_API_KEY
const ALGOLIA_INDEX_NAME = 'users'

// Create an Algolia Search API client.
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY)
const index = client.initIndex(ALGOLIA_INDEX_NAME)

const clearIndex = async () => {
  try {
    const clearObjects = await index.clearObjects()
    console.log('Algolia Index cleared')
    console.log(clearObjects)
  } catch (error) {
    console.log(error)
  }
}

clearIndex()
