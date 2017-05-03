var express = require('express');
var router = express.Router();

router.get(['/', '/v1'], function(req, res, next) {
  res.render('index-v1',
      {
          title: '360 Photo in Web VR - Line tiles'
      }
  );
});

router.get('/v2', function(req, res, next) {
    res.render('index-v2',
        {
            title: '360 Photo in Web VR - Sphere tiles'
        }
    );
});

router.get('/v3', function(req, res, next) {
    res.render('index-v3',
        {
            title: '360 Photo in Web VR - Custom tiles'
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
