import express from 'express'
import User from '../models/user'

const router = express.Router()

const dummyUserDatas = [
  {
    username: 'mucahidyazar',
    firstName: 'Mucahid',
    lastName: 'Yazar',
    email: 'mucahidyazar@gmail.com',
    password: '05369120161',
  },
  {
    username: 'talhayazar',
    firstName: 'Talha',
    lastName: 'Yazar',
    email: 'talhayazar@gmail.com',
    password: '1234567',
  },
  {
    username: 'furkanhakan',
    firstName: 'Furkan',
    lastName: 'Hakan',
    email: 'furkanhakan@gmail.com',
    password: '159753',
  },
]

router.get('/api/users', async (req, res) => {
  try {
    res.send(dummyUserDatas)
  } catch (err) {
    res.status(500).send(err)
  }
})

export default router
