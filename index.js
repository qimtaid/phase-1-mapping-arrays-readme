[1, 2, 3].map(function (num) {
    return num * num;
  });
  // => [1, 4, 9]

  function map(array) {
    // Map magic to follow shortly
  }

  function map(array) {
    for (const element of array) {
      // Do something to each element
    }
  }

  function map(array, callback) {
    for (const element of array) {
      // Do something to each element
    }
  }

  function map(array, callback) {
    for (const element of array) {
      callback(element);
    }
  }

  map([1, 2, 3], function (num) {
    console.log(num * num);
  });
  // LOG: 1
  // LOG: 4
  // LOG: 9

  function map(array, callback) {
    const newArr = [];
  
    for (const element of array) {
      callback(element);
    }
  }

  function map(array, callback) {
    const newArr = [];
  
    for (const element of array) {
      newArr.push(callback(element));
    }
  }

  function map(array, callback) {
    const newArr = [];
  
    for (const element of array) {
      newArr.push(callback(element));
    }
  
    return newArr;
  }

  const originalNumbers = [1, 2, 3, 4, 5];

const squaredNumbers = map(originalNumbers, function (num) {
  return num * num;
});

originalNumbers;
// => [1, 2, 3, 4, 5]

squaredNumbers;
// => [1, 4, 9, 16, 25]

const oldAccounts = [
    { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
  ];
  
  const newEngineers = map(oldAccounts, function (account) {
    return Object.assign({}, account, { accessLevel: "admin" });
  });
  
  oldAccounts;
  // => [
  //      { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
  //      { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
  //      { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
  //      { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
  //      { userID: 44, title: "Developer Apprentice", accessLevel: "user" }
  //    ]
  
  newEngineers;
  // => [
  //      { userID: 15, title: "Developer Apprentice", accessLevel: "admin" },
  //      { userID: 63, title: "Developer Apprentice", accessLevel: "admin" },
  //      { userID: 97, title: "Developer Apprentice", accessLevel: "admin" },
  //      { userID: 12, title: "Developer Apprentice", accessLevel: "admin" },
  //      { userID: 44, title: "Developer Apprentice", accessLevel: "admin" }
  //    ]

  const userIDs = map(newEngineers, function (eng) {
    return eng.userID;
  });
  
  userIDs;
  // => [15, 63, 97, 12, 44]

  const equippedEngineers = newEngineers.map(function (eng) {
    return Object.assign({}, eng, { equipment: "Laptop" });
  });
  
  equippedEngineers;
  // => [
  //      { userID: 15, title: "Developer Apprentice", accessLevel: "admin", equipment: "Laptop" },
  //      { userID: 63, title: "Developer Apprentice", accessLevel: "admin", equipment: "Laptop" },
  //      { userID: 97, title: "Developer Apprentice", accessLevel: "admin", equipment: "Laptop" },
  //      { userID: 12, title: "Developer Apprentice", accessLevel: "admin", equipment: "Laptop" },
  //      { userID: 44, title: "Developer Apprentice", accessLevel: "admin", equipment: "Laptop" }
  //    ]