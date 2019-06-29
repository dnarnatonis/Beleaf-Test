import { Request, Response } from 'express'

const fetch = require('node-fetch')

const API_KEY = 'AIzaSyBwypFLRfuenAyXDpJIgoHWR_4ssp2dK9c'

const login = ({ body }: Request, res: Response) => {
  new Promise((resolve, reject) => {
    try {

      const URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`
      const params = {
        email: body.email || '',
        password: body.password || '',
        returnSecureToken: true
      }

      fetch(
        URL,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(params)
        }
      )
        .then((result: any) => {
          resolve(result.json())
        })
        .catch((error: any) => {
          console.error(error)
          reject({ code: error.code || 500, message: error.message })
        })

    } catch(error) {
      console.error(error)
      reject({ code: error.code || 400, message: error.message })
    }
  })
  .then((json) => {
    return res.status(200).send(json)
  })
  .catch((error) => {
    console.error(error)
    return res.status(error.code || 500).send(error.message)
  })
}

const refresh = ({ body }: Request, res: Response) => {
  new Promise((resolve, reject) => {
    try {

      const URL = `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`
      const params = {
        grant_type: 'refresh_token',
        refresh_token: body.refreshToken || ''
      }

      fetch(
        URL,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(params)
        }
      )
        .then((result: any) => {
          resolve(result.json())
        })
        .catch((error: any) => {
          console.error(error)
          reject({ code: error.code || 500, message: error.message })
        })
    } catch(error) {
      console.error(error)
      reject({ code: error.code || 400, message: error.message })
    }
  })
  .then((json) => {
    return res.status(200).send(json)
  })
  .catch((error) => {
    console.error(error)
    return res.status(error.code || 500).send(error.message)
  })
}

export { login, refresh }