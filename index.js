import express from 'express'
import cors from 'cors'
const app = express()
const port = 3030

app.use(cors())

app.get('/banks', async (req, res) => {
  try{
    const result = await fetch('https://bank.5xcamp.us/api/banks')
    const banks = await result.json()
    res.status(200).json(
      banks
    )
  }catch{
    res.status(400).json({
      message: 'something went wrong'
    })
  }
})

app.get('/banks/:code/branches', async (req, res) => {
  try{
    const code = req.params.code
    const result = await fetch(`https://bank.5xcamp.us/api/banks/${code}/branches`)
    const branches = await result.json()
    res.status(200).json(
      branches
    )
  }catch{
    res.status(400).json({
      message: 'something went wrong'
    })
  }


})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})