App.controller('home', function (page) {
    // put stuff here
    //Return button
document.getElementById("returnButton").addEventListener("click",goBackIndex)
App.controller('home', function (page) {
  // put stuff here 
});

App.controller('page2', function (page) {
  // put stuff here
  


});

try {
  App.restore();
} catch (err) {
  App.load('home');
}



  App.controller('page2', function (page) {
    // put stuff here
  });

  try {
    App.restore();
  } catch (err) {
    App.load('home');
  }
  