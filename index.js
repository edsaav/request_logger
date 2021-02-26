const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log('#################################################');
  console.log('############     NEW REQUEST     ################');
  console.log('#################################################');
  console.log('Headers : ', req['headers']);
  console.log('URL     : ', req['url']);
  console.log('Method  : ', req['method']);
  console.log('Params  : ', req['params']);
  console.log('Query   : ', req['query']);
  res.send('OK');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
