function setUserInfo(res) {
  result = res.results[0];
  console.log(result);
  $("#fullname").text(
    `${result.name.title} ${result.name.first} ${result.name.last}`
  );
  $("#street").text(result.location.street);
  $("#city").text(result.location.city);
  $("#state").text(result.location.state);
  $("#postcode").text(result.location.postcode);
  $("#phone").text(result.phone);
  $("#cell").text(result.cell);
  $("#email").text(result.email);
  $("#date_of_birth").text(new Date(result.dob).toDateString());
  $("#profile_picture").attr("src", result.picture.large);
}

function getUserInfo() {
  fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(res => setUserInfo(res));
}

function setEventListeners() {
  $(".btn.btn-primary").on("click", function() {
    getUserInfo();
  });
}

window.onload = function() {
  setEventListeners();
};
