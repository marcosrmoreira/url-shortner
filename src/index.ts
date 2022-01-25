import { URLController } from './controller/URLController'
import express, { Request, Response } from 'express'
import { MongoConnection } from './database/MongoConnection'

const api = express()
api.use(express.json())

const database = new MongoConnection()
database.connect()

const urlControlLer = new URLController()
api.post("/shorten", urlControlLer.shorten)
api.get('/:hash', urlControlLer.redirect)



api.listen(5000, () => console.log('Express Listening'))