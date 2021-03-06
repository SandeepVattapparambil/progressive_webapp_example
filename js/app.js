/*
 *Sandeep Vattapparambil
 *sandeepv68@gmail.com
 */
//Service worker promise
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function() {
    console.log("Service Worker Registered");
    console.log('I Love Web !')
  });
}

//Materializecss initializations
$(".button-collapse").sideNav();
$('.collapsible').collapsible();
$('.tooltipped').tooltip({
  delay: 50
});

//Main hire me button scroll down
$("#goto_top").click(function() {
  $('html, body').animate({
    scrollTop: $("#top").offset().top - 64
  }, 2000);
});

//Go to top
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
  $('#mobile-demo').addClass('lime');
  $('.divider').addClass('lime darken-2');
  $('#side-nav-propic').attr('src', 'images/ms-icon-144x144.png');
  $('#navbar_id, #foot').addClass('lime');
  $("#pwa_info").delay(4000).fadeIn(800);
  console.log("Online");
} else {
  // do things that don't need connection
  Materialize.toast('<span class="red-text"><strong>Oops! you are offline :(</strong></span>', 4000);
  $('head').append('<meta name="theme-color" content="#607d8b">');
  $('head').append('<meta name="msapplication-TileColor" content="#607d8b">');
  $("#logo_img").attr("src", "images/greylogo.png");
  $('body').addClass('grey lighten-4');
  $('#mobile-demo').addClass('blue-grey');
  $('.divider').addClass('blue-grey darken-2');
  $('#side-nav-propic').attr('src', 'images/greylogo.png');
  $('#mail_form').hide();
  $('#chip_message').removeClass('hide');
  $('#navbar_id, #foot').addClass('blue-grey');
  Materialize.scrollFire(scroll_fire_options);
  console.log("offline");
}

//pwa_info destroy
$('#close_btn').click(function() {
  $('#pwa_info').addClass('animated zoomOut');
  $("#pwa_info").fadeOut(1000);
})
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
      if (data === 'success') {
        console.log('Submission was successful.');
        Materialize.toast('<span class="lime-text"><strong>Message Sent!</strong></span>', 4000);
      } else {
        console.log('An error occurred.');
        Materialize.toast('<span class="red-text"><strong>OOps! Internal Server Error:(</strong></span>', 4000);
      }
    },
    error: function(data) {

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

//Cookie ctrl
$(document).ready(function() {
  function hasCookies() {
    return (navigator.cookieEnabled);
  }
  var cookie_check = hasCookies();
  if (cookie_check) {
    console.log('Cookie enabled!');
  } else {
    Materialize.toast('<span class="red-text"><strong>Please enable cookies!</strong></span>', 4000);
  }
  if (Cookies.get('init')) {
    console.log('read a cookie');
  } else {
    Materialize.toast('<span class="amber-text-text"><strong>I use Cookie to perform better :)</strong></span>', 4000);
    Cookies.set('init', 'true', {
      expires: 7
    });
  }
});
