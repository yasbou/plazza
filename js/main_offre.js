var main = {

    init: function(){
      var main_offre= $('#main_offre');

      var formule = [

          [
          'formule pizza',
          '8€',
          '10€',
          ['1pizza junior aux choix', '+1 dessert au choix', '+1 boisson 33cl']
        ],

          [
          'formule salade',
          '7€50',
          'disponible uniquement le midi',
          ['1 salade aux choix', '+1 dessert au choix', '+1 boisson 33cl']
        ],


          [
          'formule croq/panini',
          '6€',
          'disponible uniquement le midi',
          ['1croq ou un panini aux choix', '+1 dessert au choix', '+1 boisson 33cl']
        ],


        [
        'menu senior',
        '16€',
        '16€',
        ['1pizza senior aux choix', '+1 dessert au choix', '+1 boisson 33cl']
    ]
  ];



    $(main.affiche(main_offre, formule));
    },

    affiche: function(main_offre, formule){

      console.log(formule);



      for (var i = 0; i < formule.length; i++) {

        var formuleTable =
        '<div id="formule'+i+'" class=" animated fadeInRight formule">'+
        ' <h4>'+formule[i][0]+'</h4>'+
        ' <h5>midi: '+formule[i][1]+'</h5>'+
        '<h5>soir: '+formule[i][2]+'</h5>'+
        '<ul><li>'+formule[i][3][0]+'</li><li>'+formule[i][3][1]+'</li><li>'+formule[i][3][2]+'</li></ul> </div>';

      console.log(formule[i][0]);
       main_offre.append(formuleTable);
      }
    }
}

$(main.init);
