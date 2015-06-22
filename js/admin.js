$(document).ready(function(){
  $("a.mobile").click(function(e) {
    e.preventDefault();
    $("aside").slideToggle('fast');
  });
})