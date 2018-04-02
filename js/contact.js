contact= {
init: function(){
  console.log('contact')
  $('#form_contact').hide();
    contact.scroll();
},

scroll: function() {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 2800 ) {

      contact.fadecontact();
    }
  })
},

fadecontact: function() {
  $('#form_contact').fadeIn();
}
}
$(contact.init);
