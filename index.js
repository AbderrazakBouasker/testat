const express = require('express')
const app = express()
const PORT = 3001

app.get('/api/hello',(req,res)=>{
	res.status(200).json({message:'Salem'})
})

app.listen(PORT,()=>{
	console.log(`server running on port ${PORT}`)
})

module.exports = app
