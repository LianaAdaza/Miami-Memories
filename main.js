// homepage js

var userContainer = $('.userContainer');
var submit = $('.submit-btn');

submit.on("click", appendNew);

function appendNew() {
  event.preventDefault();
  var name = $('.name').val();
  var memory = $('.memory').val();
  userContainer.append(`
    <div class = "contact-card">
      <p> <strong> Name: </strong> ${name} </p>
      <p> <strong> Favorite Memory: </strong> ${memory} </p>
      <button class = "button1"> Remove </button>
    </div>`);
  $('.name, .memory').val("");
  var removee = $('.button1');
  removee.on("click", getRid);
}

function getRid() {
  event.target.parentNode.remove();
}

var ssubmit = $('.submit');
ssubmit.on("click", appendNeww)

function appendNeww() {
  event.preventDefault();
  var nname = $('.nname').val();
  var input = $('.placehere');
  input.text(`Welcome ${nname}!`);
  $('.nname').val("");
}

// whatiskwk js

$(function () {
    "woo";
    $(".popup img").click(function() {
      var picture = $(this).attr("src");
      $(".show").fadeIn();
      $(".img-show img").attr("src", picture);
    })
    $("span, .loona").click(function() {
      $(".show").fadeOut()
    })
  })
