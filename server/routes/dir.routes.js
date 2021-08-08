const DirController = require('../controllers/dir.controller');
// the routes needs to pull in the controller

module.exports = (app) => { // need the express server app to
    app.get('/api/dir', DirController.getAllProfiles);
    app.post('/api/dir', DirController.createProfile);
    app.get('/api/dir/:id', DirController.getProfile);
    app.put('/api/dir/:id', DirController.updateProfile);
    app.delete('/api/dir/:id', DirController.deleteProfile);
}

