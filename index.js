//internal library
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
//external library
import express from 'express';

//init var
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 8080;

app.use(express.static('public'))


app.get('/', (req, res)=>{
  res.send('Home page')
});

app.get('/Hello-World',(req, res)=>{
    res.send('Hello World en su respectiva pagina');
  });

app.get('*', (req, res) =>{
    res.sendFile( __dirname + '/public/404.html')
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });