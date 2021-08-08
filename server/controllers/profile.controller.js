const Profile = require ('../models/profile.model')

module.exports = {

    getAll: (req, res) => {  // the getAll is the key, the value is the entire anonymous object
        Profile.find() //this is going to use the model connection to the db
                        // 'find' returns an array by default 
            .then((allProfiles) => {
                console.log(allProfiles);
                res.json(allProfiles); // this is the return from the route
            })
            .catch((err) => {
                console.log("error happened in the getAll");
                console.log(err);
                res.status(400).json(err);
            });

    },    
    
    create: (req, res) => {  
        console.log(req.body); //whenever creating, it's good to console log
        Profile.create(req.body) // no {} as it is already an object, the req (request) is already an object
            .then((newProfile) => {  //this is new 
                console.log(newProfile);
                res.json(newProfile);
            })
            .catch((err) => {
                console.log("error happened in the Create");
                console.log(err);
                res.json(err);
            });
    },

    details: (req, res) => {  //need ID to bring one single record
        console.log(req.params.id); //express gives us params, which will have ID
        
        Profile.findById(req.params.id) // no {} as it is already an object, the req (request) is already an object
            .then((oneProfile) => {  //this is getting one
                console.log(oneProfile);
                res.json(oneProfile);
            })
            .catch((err) => {
                console.log("error happened in the details controller");
                console.log(err);
                res.status(400).json(err);
            });
    },

    edit: (req, res) => {  //mongodb requires two pieces 1)query, i.e. what to find, 2) 
        console.log(req.params.id);
        console.log(req.body);

        Profile.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        }) // no {} as it is already an object, the req (request) is already an object
            .then((updatedProfile) => {  //this is new 
                console.log(updatedProfile);
                res.json(updatedProfile);
            })
            .catch((err) => {
                console.log("error happened in the edit controller");
                console.log(err);
                res.status(400).json(err);
            });
    },

    delete: (req, res) => {  //need ID to delete one single record
        console.log(req.params.id); //express gives us params, which will have ID
        
        Profile.findByIdAndDelete(req.params.id) // no {} as it is already an object, the req (request) is already an object
            .then((deletedProfile) => {  //this is getting one
                console.log(deletedProfile);
                res.json(deletedProfile);
            })
            .catch((err) => {
                console.log("error happened in the delete controller");
                console.log(err);
                res.status(400).json(err);
            });
    },

}