var semesters = require('../models').semesters
,result = require('../modules/').response_result

module.exports = {
  list(req, res) {
  return semesters
    .all()
    .then((semesters) => res.status(200).send(result.data(semesters)))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
},
create(req, res) {
  return semesters
    .create(req.body)
    .then(() => res.status(200).send(result.message('Insert successfully!')))
    .catch((sss) => res.status(400).send(result.error(400,sss)));
},
update(req, res) {
  return semesters
    .update(req.body,{ where: { sem_id: req.body.sem_id }})
    .then(() => res.status(200).send(result.message('Update successfully!')))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
},
destroy(req, res) {
  return semesters
    .destroy({ where: { sem_id: req.body.sem_id }})
    .then(() => res.status(200).send(result.message('Delete successfully!')))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
}
}
