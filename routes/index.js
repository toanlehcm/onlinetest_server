var subjectsController = require('../controllers').subjects
,usersController = require('../controllers').users
,authController = require('../controllers').authentication
, labsController = require('../controllers').labs
, semestersController = require('../controllers').semesters
, usertypesController = require('../controllers').usertypes
, testtypesController = require('../controllers').testtypes
, takersController = require('../controllers').takers
, questionsController = require('../controllers').questions
, imageController = require('../controllers').image

var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')   
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname)      
    }
})
var upload = multer({ storage: storage });


module.exports = (app) => {
	app.use('/api',authController.authentication);
	app.get('/api/subjects',subjectsController.list);
	app.post('/api/subjects',subjectsController.create);
	app.put('/api/subjects',subjectsController.update);
	app.patch('/api/subjects',subjectsController.destroy);

  app.post('/api/images',upload.single('image'),imageController.create);
  app.patch('/api/images',imageController.destroy);
  app.get('/api/images',imageController.list);

  app.put('/api/active',usersController.active);
  app.put('/api/deactive',usersController.deactive);

	app.get('/api/users',usersController.list);
	app.post('/api/users',usersController.create);
	app.put('/api/users',usersController.update);
	app.patch('/api/users',usersController.destroy);
  app.put('/api/active',usersController.active);

	app.get('/api/labs',labsController.list);
  app.post('/api/labs',labsController.create);
  app.put('/api/labs',labsController.update);
  app.patch('/api/labs',labsController.destroy);

  app.get('/api/semesters',semestersController.list);
  app.post('/api/semesters',semestersController.create);
  app.put('/api/semesters',semestersController.update);
  app.patch('/api/semesters',semestersController.destroy);

  app.get('/api/usertypes',usertypesController.list);
  app.post('/api/usertypes',usertypesController.create);
  app.put('/api/usertypes',usertypesController.update);
  app.patch('/api/usertypes',usertypesController.destroy);

  app.get('/api/testtypes',testtypesController.list);
  app.post('/api/testtypes',testtypesController.create);
  app.put('/api/testtypes',testtypesController.update);
  app.patch('/api/testtypes',testtypesController.destroy);

  app.get('/api/takers',takersController.list);
  app.post('/api/takers',takersController.create);
  app.put('/api/takers',takersController.update);
  app.patch('/api/takers',takersController.destroy);

  app.get('/api/questions',questionsController.list);
  app.post('/api/questions',questionsController.create);
  app.put('/api/questions',questionsController.update);
  app.patch('/api/questions',questionsController.destroy);
  
  app.post('/login',authController.login);
	app.post('/register',authController.register);
	app.post('/resetpass',authController.resetpassword);
};