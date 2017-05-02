var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index',
      {
          title: '360 Photo in Web VR'
      }
  );
});

router.get('/experiment', function(req, res, next) {
    res.render('experiment',
        {
            title: '360 Object position experiment in Web VR'
        }
    );
});

module.exports = router;
