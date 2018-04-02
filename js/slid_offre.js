app= {


  init: function(){

    $('#formule0').hide();
    $('#formule1').hide();
    $('#formule2').hide();
    $('#formule3').hide();
    $('#header_offre').hide();
      app.scroll();
  },

  scroll: function() {

    $(window).scroll(function () {
      if ($(this).scrollTop() > 800 ) {

        app.fadeoffre();
      }
    })
  },

  fadeoffre: function() {
    $('#header_offre').fadeIn();
    app.fadeFormule0();
    app.fadeFormule1();
    app.fadeFormule2();
    app.fadeFormule3();
  },

  fadeFormule0: function(){
    var timer = 0;
      setTimeout(function() {

        $('#formule0').fadeIn();
      }, timer += 1000);
  },


  fadeFormule1: function(){
    var timer = 0;
      setTimeout(function() {

        $('#formule1').fadeIn();
      }, timer += 2000);
  },

  fadeFormule2: function(){
    var timer = 0;
      setTimeout(function() {

        $('#formule2').fadeIn();
      }, timer += 3000);
  },

  fadeFormule3: function(){
    var timer = 0;
      setTimeout(function() {

        $('#formule3').fadeIn();
      }, timer += 4000);
  }

}



$(app.init);
