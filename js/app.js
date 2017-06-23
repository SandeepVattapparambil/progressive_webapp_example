/*
*Sandeep Vattapparambil
*sandeepv68@gmail.com
*/
//Service worker promise
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function() {
    console.log("Service Worker Registered");
    console.log('I ❤️ Web !')
  });
}

//Materializecss initializations
$(".button-collapse").sideNav();
$('.collapsible').collapsible();

//Main hire me button scroll down
$("#hire_me").click(function() {
  $('html, body').animate({
    scrollTop: $("#card_6").offset().top
  }, 2000);
});

//Contact form submit button class ctrl
$('#contact').on('keyup change', 'input, textarea', function() {
  $('#form_button, #form_clear_button').removeClass('disabled');
});

//Map online/offline notofication
var scroll_fire_options = [{
  selector: '#map',
  offset: 50,
  callback: function(el) {
    Materialize.toast('<span class="amber-text"><strong>Map available when online!</strong></span>', 1500);
  }
}];

//check online/offline and set theme
if (navigator.onLine) {
  // do things that need connection
  Materialize.toast('<span class="lime-text"><strong>Hello there :)</strong></span>', 4000);
  $('head').append('<meta name="theme-color" content="#c0ca33">');
  $('head').append('<meta name="msapplication-TileColor" content="#c0ca33">');
  $("#logo_img").attr("src", "images/ms-icon-310x310.png");
  $('body').addClass('lime lighten-4');
  $('#navbar_id, #foot').addClass('lime');
  console.log("Online");
} else {
  // do things that don't need connection
  Materialize.toast('<span class="red-text"><strong>Oops! you are offline :(</strong></span>', 4000);
  $('head').append('<meta name="theme-color" content="#607d8b">');
  $('head').append('<meta name="msapplication-TileColor" content="#607d8b">');
  $("#logo_img").attr("src", "images/greylogo.png");
  $('body').addClass('grey lighten-4');
  $('#mail_form').hide();
  $('#chip_message').removeClass('hide');
  $('#navbar_id, #foot').addClass('blue-grey');
  Materialize.scrollFire(scroll_fire_options);
  console.log("offline");
}

//Contact form ajax ctrl
var frm = $('#contact');
frm.submit(function(e) {
  e.preventDefault();
  var form_data = {
    name: $('#username').val(),
    email: $('#useremail').val(),
    message: $('#usermessage').val(),
  }
  console.log(form_data);
  $.ajax({
    type: "post",
    url: "process/mail.php",
    data: form_data,
    success: function(data) {
      console.log('Submission was successful.');
      Materialize.toast('<span class="lime-text">Message Sent!</span>', 4000);
    },
    error: function(data) {
      console.log('An error occurred.');
      Materialize.toast('<span class="red-text">OOps! Internal Server Error:(</span>', 4000);
    },
  });
});

//Map ctrl
function initMap() {
  var uluru = {
    lat: 11.272289,
    lng: 76.227919
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru,
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
