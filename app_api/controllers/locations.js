const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const locationsCreate = (req, res) => {
    res
        .status(200)
        .json({"status" : "success"});
};
const locationsListByDistance = (req, res) => {
    res
        .status(200)
        .json({"status" : "success"});
};
const locationsReadOne = (req, res) => {
    res
        .status(200)
        .json({"status" : "success"});
};
const locationsUpdateOne = (req, res) => {
    Loc
        .findById(req.params.locationid)
        .exec((err, location) => {
            res
                .status(200);
                .json(location);
        });
};
const locationsDeleteOne = (req, res) => {
    res
        .status(200)
        .json({"status" : "success"});
};

module.exports = {
    locationsCreate,
    locationsDeleteOne,
    locationsListByDistance,
    locationsReadOne,
    locationsUpdateOne
};