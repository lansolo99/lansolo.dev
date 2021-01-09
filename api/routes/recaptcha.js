const { stringify } = require('querystring')
const fetch = require('node-fetch')
const { Router } = require('express')
const router = Router()

router.post('/recaptcha', async (req, res) => {
  try {
    const { token } = req.body

    if (!token) {
      res.status(400).send('No token!')
      throw 'No token!'
    }

    const query = stringify({
      secret: process.env.RECAPTCHA_KEY_SECRET,
      response: token,
      remoteip: req.connection.remoteAddress,
    })

    const verifyURL = `https://google.com/recaptcha/api/siteverify?${query}`
    const body = await fetch(verifyURL).then((res) => res.json())

    res.send(body)
  } catch (e) {
    console.log('ReCaptcha error:', e)
    res.status(500).send(`<p>ReCaptcha error:</p> <pre>${e}</pre>`)
  }
})

module.exports = router
