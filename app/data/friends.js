
// ========= used example from ======================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
    {
      "name": "Ahmed",
      "photo": "ahmed@example.com",
      "scores": [5,1,4,4,5,1,2,5,4,1]
    },
    {
        "name": "laura croft",
        "photo": "ahmed@example.com",
        "scores": [2,5,4,3,1,4,2,1,4,1]
      },
      {
        "name": "Chompers",
        "photo": "ahmed@example.com",
        "scores": [1,4,5,3,2,1,3,5,4,1]
      },
      {
        "name": "Cat Lover",
        "photo": "ahmed@example.com",
        "scores": [1,5,3,5,2,4,1,5,2,1]
      },
      {
        "name": "george costanza",
        "photo": "ahmed@example.com",
        "scores": [2,5,1,3,5,4,2,2,1,3]
      },
      {
        "name": "simple jack",
        "photo": "ahmed@example.com",
        "scores": [3,4,2,3,1,5,2,2,1,3]
      },
      {
        "name": "fat bastard",
        "photo": "ahmed@example.com",
        "scores": [3,2,5,5,1,4,1,3,3,5]
      },
      {
        "name": "beetle juice",
        "photo": "ahmed@example.com",
        "scores": [1,3,2,3,1,4,5,1,5,5]
      },
      {
          "name": "watching you",
          "photo": "ahmed@example.com",
          "scores": [5,3,1,5,4,1,1,4,5,1]
        },
        {
          "name": "Thor",
          "photo": "ahmed@example.com",
          "scores": [2,1,5,1,3,3,4,5,2,1]
        }
        
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  