import * as functions from 'firebase-functions'
import * as express from 'express'
import * as cors from 'cors'
import * as parser from 'body-parser'

import * as auth from './auth'

const app = express()
app.use(parser.json())
app.use(cors())

const v1 = express()

app.use('/v1', v1)

// Authentication (auth)
v1.post('/auth/login', auth.login)
v1.post('/auth/refresh', auth.refresh)

// CRUD Meals (meal)
v1.post('/meal/:meal', [], response)
v1.get('/meal/:meal', [], response)
v1.put('/meal/:meal', [], response)
v1.delete('/meal/:meal', [], response)

function response(req: any, res: any) {
  return res.status(200).json({ code: 'NOT_IMPLEMENTED_YET', req: req, res: res })
}

const api = functions.https.onRequest(app)
export { api }
