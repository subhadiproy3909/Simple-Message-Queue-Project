const router = require('express').Router();

const {sendMailToUsers} = require('./controllers/sendmail');


router.post('/', sendMailToUsers);


module.exports = router;