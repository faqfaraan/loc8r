// Get 'home' page
const homeList = (req, res) => {
    res.render('locations-list', { title: 'Home'});
};

// Get 'Location info' page
const locationInfo = (req, res) => {
    res.render('index', { title: 'Location info' });
};

// Get 'Add review' page
const addReview = (req, res) => {
    res.render('index', { title: 'Add review'});
};

module.exports = {
    homeList,
    locationInfo,
    addReview
};