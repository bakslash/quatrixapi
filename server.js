const express = require('express');
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 5000
app.listen({PORT},()=>console.log(`magic happens at${PORT}`))