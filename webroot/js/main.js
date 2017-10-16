
function toggleNavigationToolbar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function loadContentPage(pagename) {
  console.log("load page " + pagename)
  $.ajax({
    url: "pages/" + pagename + ".html",
    dataType: "html",
    success: function(data) {
      $("#maincontent").html(data)
      console.log("loading content successfull")
    },
    error: function(error) {
      console.log("error loading content: " + error)
      // show error page
      if (pagename !== "error") {
        loadContentPage("error");
      }
    }
  })
}

function init() {
  var hash = window.location.hash;
  if (hash) {
    loadContentPage(hash.replace("#", ""))
  }
  else {
    loadContentPage('home')
  }
}
$(document).ready(
  init()
)
