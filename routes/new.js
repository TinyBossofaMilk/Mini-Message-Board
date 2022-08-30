var express = require('express');
var router = express.Router();

router.get('/new', function(req, res, next) {
    res.render('form',{})
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;
    messages.push({text: messageText, user: messageUser, added: new Date()});
  
    res.redirect('/');
});

module.exports = router;