// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [{
    name: "Ahmed",
    photo: "https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg",
    scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
}, {
    name: "Test Data",
    photo: "https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/10/GettyImages-72291000-920x584.jpg",
    scores: ["3", "1", "3", "3", "4", "1", "1", "3", "5", "5"]
}];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;