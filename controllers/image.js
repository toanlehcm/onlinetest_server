var image = require('../models').image
,result = require('../modules').response_result
,fs = require('fs');

module.exports = {
  list(req, res) {
    return image
    .all()
    .then((image) => res.status(200).send(result.data(image)))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
  },
  create(req, res) {
   return image
   .create({imgurl:req.file.originalname})
   .then(() =>  res.status(200).send(result.message('Insert successfully!')))
   .catch(() => res.status(400).send(result.error(400,'Error!')));
 },
 destroy(req, res) {
  return image
  .find({ where: { img_id: req.body.img_id }})
  .then((image) => {fs.unlinkSync('./uploads/' + image.imgurl);
    return image
    .destroy({ where: { img_id: image.img_id }})
    .then(() => res.status(200).send(result.message('Delete successfully!')))
    .catch(() => res.status(400).send(result.error(400,'Error!')));
  })

  .catch((ss) => res.status(400).send(result.error(400,ss)));
  
}
}
