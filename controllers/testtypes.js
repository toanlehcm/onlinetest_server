var testtypes = require('../models').testtypes
,result = require('../modules/').response_result

module.exports = {
  list(req, res) {
  return testtypes
    .all()
    .then((testtypes) => res.status(200).send(result.data(testtypes)))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
},
create(req, res) {
  return testtypes
    .create(req.body)
    .then(() => res.status(200).send(result.message('Insert successfully!')))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
},
update(req, res) {
  return testtypes
    .update(req.body,{ where: { test_id: req.body.test_id }})
    .then(() => res.status(200).send(result.message('Update successfully!')))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
},
destroy(req, res) {
  return testtypes
    .destroy({ where: { test_id: req.body.test_id }})
    .then(() => res.status(200).send(result.message('Delete successfully!')))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
}
}
