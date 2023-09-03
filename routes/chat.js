const fs= require('fs')
const data= require('data')
const express= require('express')

// onsubmit="document.getElementById('username').value=localStorage.getItem('username')"

const router= express.Router();

router.get('/', (req, res, next) => {
  
  fs.readFile('username.txt',(err, data)=>{
     if(err){
      console.log(err)
      data='No Chat Exists'
     }
     res.send(`${data}<form action="/"  method="POST"><input type="text" id="message" name="message" placeholder="message"><input type="hidden" name="username" id="username"><button type="submit">send</button></form>`)
  })
  
  // res.redirect('/')
  });

  router.post("/", (req, res, next)=>{
    fs.writeFile("username.txt", `${req.body.username}:${req.body.message}`,{flag: 'a'},(err)=>{
      err? console.log(err): res.redirect("/")
    })
  })

module.exports =router;