const functions = require('firebase-functions')

const resizeImages = require('./resizeImages')
const setUserUrl = require('./setUserUrl')
const clearData = require('./clearData')
const algoliaSearch = require('./algoliaSearch')
const populateUsersEmulator = require('./firebasePopulateUsers')
const emails = require('./emails')

exports.resizeImages = resizeImages.resizeImages
exports.setUserUrl = setUserUrl.setUserUrl
exports.deleteUser = clearData.deleteUser
exports.deleteUserInfos = clearData.deleteUserInfos
exports.deleteUserStorage = clearData.deleteUserStorage
exports.deleteUserStorageAvatar = clearData.deleteUserStorageAvatar
exports.indexUsers = algoliaSearch.indexUsers
exports.populateAuthUsers = populateUsersEmulator.populateAuthUsers
exports.sendWelcomeEmail = emails.sendWelcomeEmail




