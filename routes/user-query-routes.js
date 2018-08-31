const router = require('express').Router();

router.get('/query', (req, res) => {
  res.render('login',{user :req.user});
});
