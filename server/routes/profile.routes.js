const ProfileController = require('../controllers/profile.controller');
// the routes needs to pull in the controller and export the 

module.exports = (app) => {
    app.get('/api/profile', ProfileController.getAll);
    app.post('/api/profile', ProfileController.create);
    app.get('/api/profile/:id', ProfileController.details);
    app.put('/api/profile/:id', ProfileController.edit);
    app.delete('/api/profile/:id', ProfileController.delete);
}

