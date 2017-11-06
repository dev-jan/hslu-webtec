
function toggleNavigationToolbar() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

function validateAndSendForm() {
  var email = $("#contactform :input[name='email']")
  var name = $("#contactform :input[name='name']")
  var message = $("#contactform :input[name='message']")
  var errortext = $("#errortext")
  var errors = false

  // reset all errors
  email.removeClass("error")
  name.removeClass("error")
  message.removeClass("error")
  errortext.html("")

  console.log("email=" + email.val() + ", name=" + name.val() + ", message=" + message.val())

  if (email.val() === "") {
    errors = true
    email.addClass("error")
  }
  if (name.val() === "") {
    errors = true
    name.addClass("error")
  }
  if (message.val() === "") {
    errors = true
    message.addClass("error")
  }

  if (errors) {
    errortext.html("Bitte die fehlerhaften Felder korrigieren (alle Felder sind obligatorisch)")
  }
  else {
    $.ajax({
      url: '/dynamic/form.php',
      type: 'POST',
      data: {
        'email': email.val(),
        'name': name.val(),
        'message': message.val()
      },
      success: function(data) {
        swal({
          title: "Nachricht gesendet",
          text: data,
          icon: "success",
        })
        $("#contactform")[0].reset()
      },
      error: function(error) {
        swal({
          title: "Error",
          text: error,
          icon: "error",
        })
      }
    })
  }
}

function loadContentPage(pagename) {
  console.log("load page " + pagename)
  $.ajax({
    url: "pages/" + pagename + ".html",
    dataType: "html",
    success: function(data) {
      $("#maincontent").html(data)
      setMenuActive(pagename)
    },
    error: function(error) {
      console.log("error loading content: " + error)
      // show error page
      if (pagename !== "error") {
        loadContentPage("error")
      }
    }
  })
}

function setMenuActive(pagename) {
  $(".topnav>a.active").removeClass("active")
  $("#nav_" + pagename).addClass("active")
}

function changeStyle(stylename) {
  $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', 'css/themes/' + stylename + ".css"))
  Cookies.set('style', stylename, { expires: 365 })
}

function init() {
  // load correct subpage via AJAX
  var hash = window.location.hash
  if (hash) {
    loadContentPage(hash.replace("#", ""))
  }
  else {
    loadContentPage('home')
  }

  // init page with correct style
  var stylename = Cookies.get('style')
  if (stylename === undefined){
    stylename = 'black'
  }
  changeStyle(stylename)
}
$(document).ready(
  init()
)
