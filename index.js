require('dotenv').config();
const axios = require('axios');

const domainPrefix = 'https://trustmeapp.page.link'
const link = 'https://www.google.com/?id='; // it will be in the constant/config file so we can change it easily 
let id = "12"; // it will be dynamic
const iosBundleId = 'com.yudiz.DeepContract'
axios.post(`https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${process.env.FIREBASE_API_KEY}`, {
  "dynamicLinkInfo": {
    "domainUriPrefix": domainPrefix,
    "link": `${link}${id}`,
    "iosInfo": {
      "iosBundleId": iosBundleId
    }
  }
}, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    console.log("data", res.data)
  }).catch(error => {
    console.log("error", error.response.data)
  })

/**
 * Generate from the long link
 */
axios.post(`https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${process.env.FIREBASE_API_KEY}`, {
  "longDynamicLink": `${domainPrefix}/?link=${link}${id}&ibi=${iosBundleId}&isi=1409652632`,
  "suffix": {
    "option": "UNGUESSABLE"
  }
}, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    console.log("data", res.data)
  }).catch(error => {
    console.log("error", error.response.data)
  })