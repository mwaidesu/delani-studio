/* var submitForm = function(Event){
  Event.preventDefault();

  var formName = document.getElementById("name").value;
  console.log(formName);
  var formEmail = document.getElementById("email").value;
  console.log(formEmail);
  var formMessage = document.getElementById("message").value;
  console.log(formMessage);

  if (formName.value !== null && formEmail.value !== null && formMessage.value !== null){
    alert("We have received your message. Thank you.")
  }

}

function checkSubmit(e) {
  if(e && e.keyCode == 13) {
     document.forms[0].submit();
  }
} */

//user interface logic
//hover
$(".port-img").mousemove(function(e) {
  var hovertext = $(this).attr("hovertext");
  $(this).css("border", "2px solid grey","border","11px solid white" );
  $("#hoverdiv").text(hovertext).show().offset($(this).offset());

}).mouseout(function() {
  $(this).css("border", "none");
  $('#hoverdiv').hide()
});

//what we do toggle

  /* $("#what-1").click(function(){
    $(".what-description").hide();
  });
  $("#what-1").click(function(){
    $(".what-description").show().offset($(this).offset());
  }); */

  $("#what-1").click(function(){  
    $("#description1").slideToggle("slow");});

  $("#what-2").click(function(){  
    $("#description2").slideToggle("slow");});

  $("#what-3").click(function(){  
    $("#description3").slideToggle("slow");});
