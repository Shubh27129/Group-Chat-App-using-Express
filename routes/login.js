

const express= require('express')

const router= express.Router();



router.get('/login', (req, res, next) =>{

    res.send(`<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"  method="POST"><input type="text" name="username" id="username"><button type="submit">Login</button></form>`)
    // res.redirect('/')

    })

// router.post('/', (req, res, next)=>{
  
//     data.push(`{${req.body.username}}`)
//     res.redirect('/')
// })

module.exports = router;