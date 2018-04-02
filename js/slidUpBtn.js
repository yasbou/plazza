btnslid= {


  init: function(){
    for (var i = 0; i < 9; i++) {

    $('#btn'+i).hide();
  }
      btnslid.scroll();
  },

  scroll: function() {

    $(window).scroll(function () {
      if ($(this).scrollTop() > 1200 ) {

        btnslid.fadebtn();
      }
    })
  },

  fadebtn: function() {
  btnslid.fadebtn0();
  btnslid.fadebtn1();
  btnslid.fadebtn2();
  btnslid.fadebtn3();
  btnslid.fadebtn4();
  btnslid.fadebtn5();
  btnslid.fadebtn6();
  btnslid.fadebtn7();
  btnslid.fadebtn8();
  },

  fadebtn0: function(){
    var timer = 0;
      setTimeout(function() {

        $('#btn0').fadeIn();
      }, timer += 1000);
  },


  fadebtn1: function(){
    var timer = 0;
      setTimeout(function() {

        $('#btn8').fadeIn();
      }, timer += 1800);
  },

  fadebtn2: function(){
    var timer = 0;
      setTimeout(function() {

        $('#btn1').fadeIn();
      }, timer += 2600);
  },

  fadebtn3: function(){
    var timer = 0;
      setTimeout(function() {

        $('#btn7').fadeIn();
      }, timer += 3400);
  },

  fadebtn4: function(){
    var timer = 0;
      setTimeout(function() {

        $('#btn2').fadeIn();
      }, timer += 4200);
  },

  fadebtn5: function(){
    var timer = 0;
      setTimeout(function() {

        $('#btn6').fadeIn();
      }, timer += 5000);
  },

  fadebtn6: function(){
    var timer = 0;
      setTimeout(function() {

        $('#btn3').fadeIn();
      }, timer += 5800);
  },

  fadebtn7: function(){
    var timer = 0;
      setTimeout(function() {

        $('#btn5').fadeIn();
      }, timer += 6600);
  },

  fadebtn8: function(){
    var timer = 0;
      setTimeout(function() {

        $('#btn4').fadeIn();
      }, timer += 7400);
  },


}



$(btnslid.init);
