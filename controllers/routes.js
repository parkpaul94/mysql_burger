let express = require('express');
let router = express.Router();
let burger = require('../models/burger.js');

router.get('/', (req, res) => {
  burger.all((burger_data) => {
    console.log(burger_data);
    res.render('index', {
      burger_data
    });
  })
})

router.put('/burgers/update', (req, res) => {
  burger.update(req.body.burger_id, (result) => {
    console.log(result);
    res.redirect('/');
  });
});

router.post('/burgers/create', (req, res) => {
  burger.create(req.body.burger_name, (result) => {
    res.redirect('/');
  })
})

module.exports = router;