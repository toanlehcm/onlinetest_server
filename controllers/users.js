var users = require('../models').users
, result = require('../modules/').response_result
,bcrypt = require('bcryptjs')

module.exports = {
list(req, res) {
  return users
    .all()
    .then((users) => res.status(200).send(result.data(users)))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
},
create(req, res) {
  return users
  .create({
    useaccount : req.body.useaccount,
    useenc_password : bcrypt.hashSync(req.body.useenc_password,8)  
  })
  .then(() => res.status(200).send(result.message('Create successfully!')))
  .catch(() => res.status(400).send(result.error(400,'Error!')));
},
update(req, res) {
  return users
    .update(
      {useaccount : req.body.useaccount,
        useenc_password : bcrypt.hashSync(req.body.useenc_password,8)},
      {where: { use_id: req.body.use_id }} 
    )
    .then(() => res.status(200).send(result.message('Update successfully!')))
    .catch(() => res.status(400).send(resutl.error(400,'Error!')));
},
active(req, res) {
  return users
    .update({useactive:1 },{where: { use_id: req.body.use_id }})
    .then(() => res.status(200).send(result.message('Update successfully!')))
    .catch(() => res.status(400).send(resutl.error(400,'Error!')));
},
deactive(req, res) {
  return users
    .update({useactive:0 },{where: { use_id: req.body.use_id }})
    .then(() => res.status(200).send(result.message('Update successfully!')))
    .catch(() => res.status(400).send(resutl.error(400,'Error!')));
},
destroy(req, res) {
  return users
    .destroy({ where: { use_id: req.body.use_id }})
    .then(() => res.status(200).send(result.message('Delete successfully!')))
    .catch(error => res.status(400).send(resutl.error(400,'Error!')));
}
}