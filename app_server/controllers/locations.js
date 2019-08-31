// Get 'home' page
const homeList = (req, res) => {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        }
    });
};

// Get 'Location info' page
const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });
};

// Get 'Add review' page
const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review' });
};

module.exports = {
    homeList,
    locationInfo,
    addReview
};