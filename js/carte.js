var carte ={

init: function(){

  $('#btn0').on('click', carte.fadebtn0);
  $('#btn1').on('click', carte.fadebtn1);
  $('#btn2').on('click', carte.fadebtn2);
  $('#btn3').on('click', carte.fadebtn3);
  $('#btn4').on('click', carte.fadebtn4);
  $('#btn5').on('click', carte.fadebtn5);
  $('#btn6').on('click', carte.fadebtn6);
  $('#btn7').on('click', carte.fadebtn7);
  $('#btn8').on('click', carte.fadebtn8);
},

  fadebtn0: function(){

    var pizza = [
      [
        'margherita',
        ['mozzarella', 'olives', 'origan']
      ],

      [
        'reine',
        ['mozzarella', 'jambon', 'champignon', 'olives', 'origan']
      ],

      [
        'roi',
        ['mozzarella', 'jambon', 'champignon', 'oeuf', 'olives', 'origan']
      ],
      [
        'napolitaine',
        ['mozzarella', 'capres', 'olives']
      ],
      [
        '4 fromage',
        ['mozzarella', 'bleu', 'chevre', 'brie', 'origan']
      ],
      [
        'orientale',
        ['mozzarella', 'merguez', 'oignons', 'poivrons', 'oeuf', 'olive', 'origan']
      ],
      [
        'végétarienne',
        ['mozzarella', 'champignons', 'tomates fraiches', 'poivrons', 'olives', 'origan']
      ],
      [
        'fraicheur',
        ['mozzarella', 'cocktail de fruits de mer', 'thon', 'origan',]
      ],
      [
        'la terrible',
        ['mozzarella', 'kebab', 'oignons', 'origan',]
      ],
      [
        'hawaiene',
        ['mozzarella', 'jambon', 'ananas', 'origan']
      ],
      [
        '4 charcuterie',
        ['mozzarella', 'jambon', 'chorizon', 'merguez', 'lardon']
      ],
      [
        'la rafinée',
        ['mozzarella', 'courgettes', 'aubergines', 'tomates fraiches', 'oignons', 'olives', 'origan']
      ],
      [
        'la tendance',
        ['mozzarella', 'viande hachée', 'oigons', 'poivrons', 'champignons', 'oeuf', 'origan']
      ],
      [
        "l'explosive",
        ['mozzarella', 'piments', 'oignons', 'poivrons', 'chorizo', 'champignons', 'origan']
      ],
      [
        'la surprenante',
        ['mozzarella', 'chorizo', 'lardons', 'oignons', 'raclette', 'origan']
      ],
      [
        "l'exquise",
        ['mozzarella', 'émincé de poulet', 'sauce curry', 'pomme de terre', 'poivrons', 'origan']
      ],
      [
        'la succulente',
        ['mozzarella', 'merguez', 'jambon', 'pépéroni', 'poivrons', 'champignons', 'olives', 'origan']
      ],
      [
        'la perso',
        ['mozzarella', 'origan', '4 ingrédients aux choix']
      ],
      [
        'bolognaise',
        ['mozzarella', 'sauce bolognaise', 'oeuf', 'origan']
      ],
      [
        'neptune',
        ['mozzarella', 'thon', 'poivrons', 'oignons', 'olives', 'oeuf', 'origan']
      ],
      [
        'baccon',
        ['mozzarella', 'viande hachée', 'baccon', 'pomme de terre', 'oignons', 'oeuf', 'origan']
      ],
      [
        "la ch'ti",
        ['mozzarella', 'maroille', 'oignons', 'pomme de terre', 'lardon', 'origan']
      ],
      [
        'méditeranéenne',
        ['mozzarella', 'merguez', 'thon', 'poivrons', 'oignons', 'origan']
      ],
      [
        '4 saisons',
        ['mozzarella', 'jambon', 'oignons', 'poivrons', 'olives', 'artichauts', 'origan']
      ],
      [
        'tonata',
        ['mozzarella', 'thon', 'champignons', 'carpes', 'origan']
      ],
      [
        'moussaka',
        ['mozzarella', 'viande hachée', 'champigons', 'aubergine', 'oeuf', 'oignions', 'origan']
      ],
      [
        'césar',
        ['mozzarella', 'viande hachée', 'oignons', 'chéddar', 'origan']
      ],
      [
        'buffalo',
        ['mozzarella', 'viande hachée', 'chorizo', 'oeuf', 'champignon', 'oignons', 'origan']
      ],
      [
        'royale',
        ['mozzarella', 'chorizo', 'jambon', 'oeuf', 'bleu', 'poivrons', 'origan']
      ],

    ]

    console.log(pizza);

    $('.carte').text('');

    for (var i = 0; i < pizza.length; i++) {
      for (var a = 1; a < pizza[i].length; a++) {
        var tomate =
        '<ul class= "pizza"><li class= pizza_name >'+pizza[i][0]+':</li><li>   '+pizza[i][a]+' </li></ul>';

        $('.carte').append(tomate);

      }
  }
  },

  fadebtn1: function(){
    var pizza = [
      [
        'normande',
        ['mozzarella', 'pomme de terre', 'oignons', 'raclette', 'origan']
      ],

      [
        'norvegienne',
        ['mozzarella', 'saumon fumé', 'origan',]
      ],
      [
        'savoyarde',
        ['mozzarella', 'lardons', 'pomme de terre', 'oignon', 'raclette', 'origan']
      ],
      [
        "l'étonnante",
        ['mozzarella', 'viande à kebab', 'oignons', 'oeuf', 'origan']
      ],
      [
        'la séduisante',
        ['mozzarella', 'jambon', 'chèvre', 'miel', 'origan']
      ],
      [
        'la plazza',
        ['mozzarella', 'cheèvre', 'oignons', 'pomme de terre', 'origan']
      ],
      [
        "l'appétissante",
        ['mozzarella', 'mozzarella', 'Viande hachée', 'champignons', 'oeuf', 'pomme de terre', 'origan']
      ],
      [
        'la délicieuse',
        ['mozzarella', 'merguez', 'pomme de terre', 'oignons', 'origan']
      ],
      [
        'la savoureuse',
        ['mozzarella', 'poulet fumé', 'pomme de terre', 'oignons', 'origan']
      ],
      [
        'boursinoise',
        ['mozzarella', 'viande hachée', 'boursin', 'poivrons', 'oignons', 'oeuf', 'origan']
      ],
      [
        'indienne',
        ['mozzarella', 'ananas', 'émincé de poulet', 'sauce curry', 'origan']
      ],
      [
        'crémeuse',
        ['mozzarella', 'brie', 'pomme de terre', 'oignons', 'chevre', 'origan']
      ],
      [
        'fabuleuse',
        ['mozzarella', 'poulet fumé', 'boursin', 'oignons', 'champignons', 'origan']
      ],
      [
        'la chef',
        ['mozzarella', 'poulet', 'pomme de terre', 'oignons', 'boursin', 'origan']
      ],
      [
        'la 7 fromage',
        ['mozzarella', 'boursin', 'raclette', 'chevre', 'brie', 'bleu', 'cheddar', 'origan']
      ],
      [
        'la figue',
        ['mozzarella', 'chevre', 'confiture de figue', 'noix']
      ],
    ];
    $('.carte').text('');

    console.log('ok loulou');
    for (var i = 0; i < pizza.length; i++) {
      for (var a = 1; a < pizza[i].length; a++) {
        var tomate =
        '<ul class= "pizza"><li class= pizza_name >'+pizza[i][0]+':</li><li>   '+pizza[i][a]+' </li></ul>';

        $('.carte').append(tomate);

      }
  }
  },

  fadebtn2: function(){
    pizza=
            [
              [
                'divine',
                [
                  "viande hachée", "chorizo", "merguez", "origan"
                ]

              ],

            ];

    $('.carte').text('');

    console.log('ok loulou');
    for (var i = 0; i < pizza.length; i++) {
      for (var a = 1; a < pizza[i].length; a++) {
        var tomate =
        '<ul class= "pizza"><li class= pizza_name >'+pizza[i][0]+':</li><li>   '+pizza[i][a]+' </li></ul>';

        $('.carte').append(tomate);

      }
  }
  },

  fadebtn3: function(){
    pizza=
            [
              [
                'la remarquable',
                [
                  "mozzarella", "kebab", "oignons", 'boursin', "origan"
                ]

              ],

              [
                'la moderne',
                [
                  "mozzarella", "viande hachée", "merguez", 'oeuf', "origan"
                ]

              ],

            ];

    $('.carte').text('');

    console.log('ok loulou');
    for (var i = 0; i < pizza.length; i++) {
      for (var a = 1; a < pizza[i].length; a++) {
        var tomate =
        '<ul class= "pizza"><li class= pizza_name >'+pizza[i][0]+':</li><li>   '+pizza[i][a]+' </li></ul>';

        $('.carte').append(tomate);

      }
  }
  },




  fadebtn4: function(){
    pizza=
          [
            [
              '6 fromages',
              [
                "mozzarella", "bleu", "brie", "chevre", "gorgonzola", "provolone"
              ]

            ],
          ];
  $('.carte').text('');

  console.log('ok loulou');
  for (var i = 0; i < pizza.length; i++) {
    for (var a = 1; a < pizza[i].length; a++) {
      var tomate =
      '<ul class= "pizza"><li class= pizza_name >'+pizza[i][0]+':</li><li>   '+pizza[i][a]+' </li></ul>';

      $('.carte').append(tomate);

    }
}
  },

  fadebtn5: function(){
    pizza=
          [
            [
              'calzone',
              [
                "mozzarella", "tomate", "jambon", "oeuf"
              ]

            ],

            [
              'clayoise',
              [
                "mozzarella", "tomate", "lardon", "viande hachée", "oeuf", "origan"
              ]

            ],
            [
              'classique',
              [
                "mozzarella", "crème fraiche", "poulet", "pomme de terre", "oignons", 'origan'
              ]

            ],
            [
              'volcano',
              [
                "mozzarella", "crème fraiche", "thon", "oeuf", 'chèvres', 'origan'
              ]

            ],
          ];
  $('.carte').text('');

  console.log('ok loulou');
  for (var i = 0; i < pizza.length; i++) {
    for (var a = 1; a < pizza[i].length; a++) {
      var tomate =
      '<ul class= "pizza"><li class= pizza_name >'+pizza[i][0]+':</li><li>   '+pizza[i][a]+' </li></ul>';

      $('.carte').append(tomate);

    }
}
  },

  fadebtn6: function(){
    pizza=
          [
            [
              'la mexicaine',
              [
                "mozzarella", "viande hachée", "oignons", "merguez", "oeuf"
              ]

            ],
          ];


  $('.carte').text('');

  console.log('ok loulou');
  for (var i = 0; i < pizza.length; i++) {
    for (var a = 1; a < pizza[i].length; a++) {
      var tomate =
      '<ul class= "pizza"><li class= pizza_name >'+pizza[i][0]+':</li><li>   '+pizza[i][a]+' </li></ul>';

      $('.carte').append(tomate);

    }
}
  },

  fadebtn7: function(){
    pizza=
          [
            [
              'la burger',
              [
                "mozzarella", "viande hachée", "oignons", "cheddar"
              ]

            ],
          ];

  $('.carte').text('');

  console.log('ok loulou');
  for (var i = 0; i < pizza.length; i++) {
    for (var a = 1; a < pizza[i].length; a++) {
      var tomate =
      '<ul class= "pizza"><li class= pizza_name >'+pizza[i][0]+':</li><li>   '+pizza[i][a]+' </li></ul>';

      $('.carte').append(tomate);

    }
}
  },

  fadebtn8: function(){
    pizza=
          [
            [
              'votre compo...',
              [
                "banane", "ananas", "coco", "amandes", 'snickers', 'bounty', 'nougat', 'kinder'
              ]

            ]
          ];

  $('.carte').text('');

  console.log('ok loulou');
  for (var i = 0; i < pizza.length; i++) {
    for (var a = 1; a < pizza[i].length; a++) {
      var tomate =
      '<ul class= "pizza"><li class= pizza_name >'+pizza[i][0]+':</li><li>   '+pizza[i][a]+' </li></ul>';

      $('.carte').append(tomate);

    }
}
}
}

$(carte.init);
