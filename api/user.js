module.exports = function (app,db, bodyParser,ObjectID) {    
     app.post('/api/User', function(req, res){       
        var newUser = req.body;
        newUser.createDate = new Date();
        db.collection('payschedules').insertOne(newUser, function(err, doc) {
            if (err) {
            handleError(res, err.message, "Failed to create new user.");
            } else {
            res.status(201).json(doc.ops[0]);
            }
        });
        console.log("Post Create User: /User");
        console.log(newUser);
     });

    //api Get user
    app.get('/api/User', function (req, res) {
     console.log("Get All User: /User");
     db.collection('payschedules').find({}).toArray(function(err, docs) {
        if (err) {
        handleError(res, err.message, "Failed to get contacts.");
        } else {
        res.status(200).json(docs);
        }
      });
    });

    //http://localhost:6001/user/vinitecnico@gmail.com/1234
    app.get("/api/user/:email/:password", function(req, res) {
        db.collection('payschedules').findOne({ "email": req.params.email,"password": req.params.password}, function(err, doc) {
            if (err) {
            handleError(res, err.message, "Failed to get contact");
            } else {
            res.status(200).json(doc);
            }
        });
    });

    //http://localhost:6001/user/578e6aca0931431f60792582
    app.get("/api/user/:id", function(req, res) {
        db.collection('payschedules').findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
            if (err) {
            handleError(res, err.message, "Failed to get contact");
            } else {
            res.status(200).json(doc);
            }
        });
    });

    //http://localhost:6001/user/578e6aca0931431f60792582
    app.put("/api/user/:id", function(req, res) {
        var updateDoc = req.body;
        delete updateDoc._id;

        db.collection('payschedules').updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
            if (err) {
            handleError(res, err.message, "Failed to update contact");
            } else {
            res.status(200).end();
            }
        });
    });


    //http://localhost:6001/user/578e6aca0931431f60792582 
    app.delete("/api/user/:id", function(req, res) {
        db.collection('payschedules').deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
            if (err) {
            handleError(res, err.message, "Failed to delete contact");
            } else {
            res.status(200).end();
            }
        });
    });
}