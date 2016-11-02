const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const router = express.Router();
router.get('/bar', function(req, res) {
  res.send('baz');
});
app.use('/foo', router);

const port = 6000;
app.listen(port, function () {
  console.log(`Test server listening on port ${port}`);
});

module.exports = app;
