var btn ={
  init: function(){
    var btnmenu = $('#btn_menu');

    var base = [
                'Base sauce tomate',
                'Base crème fraiche',
                'Base moutarde',
                'base barbecue',
                'Base chezzy easy',
                'Base soufflée',
                'Base chiliThai',
                'Base burger',
                'Base nutella'];

                $(btn.affiche(btnmenu, base));
  },

    affiche: function(btnmenu, base){

      console.log(base);

      for (var i = 0; i < base.length; i++) {
      var button= '<button id="btn'+i+'" class= "animated bounceInUp" type="button" name="button">'+base[i]+'</button>';
      btnmenu.append(button);
      }

    }


}

$(btn.init);
