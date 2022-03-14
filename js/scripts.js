
//hover on portfolio
$(".port-img").mousemove(function (e) {
  var hovertext = $(this).attr("hovertext");
  $(this).css("border", "2px solid grey", "border", "11px solid white");
  $("#hoverdiv").text(hovertext).show().offset($(this).offset());

}).mouseout(function () {
  $(this).css("border", "none");
  $('#hoverdiv').hide()
});

//toggle on what we do
$("#what-1").click(function () {
  $("#description1").slideToggle("slow");
});

$("#what-2").click(function () {
  $("#description2").slideToggle("slow");
});

$("#what-3").click(function () {
  $("#description3").slideToggle("slow");
});


$('#mc-embedded-subscribe').click(function (e) {
  var nameInForm = document.getElementById('mce-NAME').value;
  alert("Dear " + nameInForm+ " we have received your message. Thank you for reaching out to us.")
  e.preventDefault();
})
