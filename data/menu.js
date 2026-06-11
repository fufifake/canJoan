/* Can Joan — Carta del restaurante.
   Edita este archivo o usa el CMS para añadir, eliminar o modificar platos.
   Cada categoría: id, icon, label(es/en/ca), sub(es/en/ca), items[].
   Cada plato: name, tag(null o {es/en/ca}), desc{es/en/ca}, price. */

window.MENU_DATA = {
  "categories": [
    {
      "id": "pizzas",
      "icon": "pizza",
      "label": {
        "es": "Pizzas",
        "en": "Pizzas",
        "ca": "Pizzes"
      },
      "sub": {
        "es": "horno de leña",
        "en": "wood-fired",
        "ca": "forn de llenya"
      },
      "items": [
        {
          "name": "Margherita",
          "tag": {
            "es": "Clásica",
            "en": "Classic",
            "ca": "Clàssica"
          },
          "desc": {
            "es": "Tomate natural, mozzarella fior di latte, albahaca fresca, AOVE",
            "en": "Natural tomato, fior di latte mozzarella, fresh basil, EVOO",
            "ca": "Tomàtiga natural, mozzarella fior di latte, alfàbega fresca, AOVE"
          },
          "price": "12€"
        },
        {
          "name": "Mamasita",
          "tag": {
            "es": "Clásica",
            "en": "Classic",
            "ca": "Clàssica"
          },
          "desc": {
            "es": "Tomate natural, mozzarella fior di latte, albahaca fresca, AOVE",
            "en": "Natural tomato, fior di latte mozzarella, fresh basil, EVOO",
            "ca": "Tomàtiga natural, mozzarella fior di latte, alfàbega fresca, AOVE"
          },
          "price": "9,50€"
        },
        {
          "name": "490 Quesos",
          "tag": {
            "es": "Vegetariana",
            "en": "Vegetarian",
            "ca": "Vegetariana"
          },
          "desc": {
            "es": "Mozzarella, gorgonzola, parmigiano reggiano, provola affumicata",
            "en": "Mozzarella, gorgonzola, parmigiano reggiano, smoked provola",
            "ca": "Mozzarella, gorgonzola, parmigiano reggiano, provola affumicata"
          },
          "price": "11,50€"
        },
        {
          "name": "Can Joan",
          "tag": {
            "es": "Firma",
            "en": "Signature",
            "ca": "Signatura"
          },
          "desc": {
            "es": "Sobrasada mallorquina, miel de la Serra de Tramuntana, queso mahonés, rúcula",
            "en": "Mallorcan sobrasada, honey from Serra de Tramuntana, Mahón cheese, rocket",
            "ca": "Sobrassada mallorquina, mel de la Serra de Tramuntana, formatge maonès, ruca"
          },
          "price": "12,50€"
        },
        {
          "name": "Mallorquina",
          "tag": null,
          "desc": {
            "es": "Gambas del mediterráneo, alcachofas, tomate seco, aceitunas negras, mozzarella",
            "en": "Mediterranean prawns, artichokes, sun-dried tomato, black olives, mozzarella",
            "ca": "Gambes de la mediterrània, carxofes, tomàtiga seca, olives negres, mozzarella"
          },
          "price": "13,50€"
        },
        {
          "name": "Marinara",
          "tag": {
            "es": "Vegana",
            "en": "Vegan",
            "ca": "Vegana"
          },
          "desc": {
            "es": "Tomate natural, ajo, orégano, AOVE. Sin queso, receta napolitana tradicional",
            "en": "Natural tomato, garlic, oregano, EVOO. No cheese, traditional Neapolitan recipe",
            "ca": "Tomàtiga natural, all, orenga, AOVE. Sense formatge, recepta napolitana tradicional"
          },
          "price": "9,00€"
        },
        {
          "name": "Bosco",
          "tag": null,
          "desc": {
            "es": "Crema de setas, boletus, mozzarella, trufa negra, aceite de ajo",
            "en": "Mushroom cream, porcini, mozzarella, black truffle, garlic oil",
            "ca": "Crema de bolets, boletus, mozzarella, tòfona negra, oli d'all"
          },
          "price": "13,00€"
        },
        {
          "name": "Diavola",
          "tag": null,
          "desc": {
            "es": "Tomate natural, mozzarella, salame piccante, pimientos asados, guindilla",
            "en": "Natural tomato, mozzarella, spicy salami, roasted peppers, chilli",
            "ca": "Tomàtiga natural, mozzarella, salame piccante, pebrots rostits, bitxo"
          },
          "price": "11,00€"
        },
        {
          "name": "Prosciutto e Funghi",
          "tag": null,
          "desc": {
            "es": "Tomate natural, mozzarella, jamón cocido, champiñones, orégano",
            "en": "Natural tomato, mozzarella, cooked ham, mushrooms, oregano",
            "ca": "Tomàtiga natural, mozzarella, pernil cuit, xampinyons, orenga"
          },
          "price": "11,50€"
        }
      ]
    },
    {
      "id": "pastas",
      "icon": "pasta",
      "label": {
        "es": "Pastas",
        "en": "Pasta",
        "ca": "Pastes"
      },
      "sub": {
        "es": "pasta fresca artesana",
        "en": "artisan fresh pasta",
        "ca": "pasta fresca artesana"
      },
      "items": [
        {
          "name": "Spaghetti Bolognesa",
          "tag": null,
          "desc": {
            "es": "Ragú de ternera cocinado lentamente, parmigiano reggiano, albahaca",
            "en": "Slow-cooked beef ragù, parmigiano reggiano, basil",
            "ca": "Ragú de vedella cuit lentament, parmigiano reggiano, alfàbega"
          },
          "price": "9,50€"
        },
        {
          "name": "Spaghetti Carbonara",
          "tag": null,
          "desc": {
            "es": "Guanciale, huevo, pecorino romano, pimienta negra. Receta original romana",
            "en": "Guanciale, egg, pecorino romano, black pepper. Original Roman recipe",
            "ca": "Guanciale, ou, pecorino romano, pebre negre. Recepta original romana"
          },
          "price": "9,50€"
        },
        {
          "name": "Lasaña Casera",
          "tag": null,
          "desc": {
            "es": "Pasta fresca, ragú de ternera y cerdo, bechamel artesana, parmigiano",
            "en": "Fresh pasta, beef and pork ragù, artisan béchamel, parmigiano",
            "ca": "Pasta fresca, ragú de vedella i porc, beixamel artesana, parmigiano"
          },
          "price": "10,50€"
        },
        {
          "name": "Penne all'Arrabbiata",
          "tag": {
            "es": "Vegana",
            "en": "Vegan",
            "ca": "Vegana"
          },
          "desc": {
            "es": "Tomate natural, ajo, guindilla, AOVE, perejil fresco",
            "en": "Natural tomato, garlic, chilli, EVOO, fresh parsley",
            "ca": "Tomàtiga natural, all, bitxo, AOVE, julivert fresc"
          },
          "price": "8,50€"
        },
        {
          "name": "Tagliatelle ai Funghi",
          "tag": {
            "es": "Vegetariana",
            "en": "Vegetarian",
            "ca": "Vegetariana"
          },
          "desc": {
            "es": "Mezcla de setas de temporada, crema, parmigiano, trufa",
            "en": "Seasonal mushroom mix, cream, parmigiano, truffle",
            "ca": "Barreja de bolets de temporada, crema, parmigiano, tòfona"
          },
          "price": "11,00€"
        }
      ]
    },
    {
      "id": "carnes",
      "icon": "meat",
      "label": {
        "es": "Carnes",
        "en": "Meat",
        "ca": "Carns"
      },
      "sub": {
        "es": "a la plancha o al horno",
        "en": "grilled or oven-baked",
        "ca": "a la planxa o al forn"
      },
      "items": [
        {
          "name": "Entrecot de Ternera",
          "tag": null,
          "desc": {
            "es": "Entrecot de 280g a la plancha, guarnición de patatas y ensalada",
            "en": "280g grilled entrecôte, potato garnish and salad",
            "ca": "Entrecot de 280g a la planxa, guarnició de patates i amanida"
          },
          "price": "18,00€"
        },
        {
          "name": "Escalope de Pollo",
          "tag": null,
          "desc": {
            "es": "Pechuga empanada a la milanesa, limón, ensalada mixta y patatas fritas",
            "en": "Breaded chicken breast alla milanese, lemon, mixed salad and chips",
            "ca": "Pit de pollastre arrebossat a la milanesa, llimona, amanida mixta i patates fregides"
          },
          "price": "8,50€"
        },
        {
          "name": "Pollo a la Plancha",
          "tag": null,
          "desc": {
            "es": "Pechuga de pollo a la plancha con hierbas mallorquinas, patatas y pimientos",
            "en": "Grilled chicken breast with Mallorcan herbs, potatoes and peppers",
            "ca": "Pit de pollastre a la planxa amb herbes mallorquines, patates i pebrots"
          },
          "price": "9,50€"
        },
        {
          "name": "Costillas BBQ",
          "tag": null,
          "desc": {
            "es": "Costillar de cerdo glaseado con salsa BBQ de la casa, patatas y coleslaw",
            "en": "Pork ribs glazed with house BBQ sauce, potatoes and coleslaw",
            "ca": "Costellam de porc glasejat amb salsa BBQ de la casa, patates i coleslaw"
          },
          "price": "14,50€"
        }
      ]
    },
    {
      "id": "entrantes",
      "icon": "shield",
      "label": {
        "es": "Entrantes",
        "en": "Starters",
        "ca": "Entrants"
      },
      "sub": {
        "es": "para compartir",
        "en": "to share",
        "ca": "per compartir"
      },
      "items": [
        {
          "name": "Nachos con Queso",
          "tag": null,
          "desc": {
            "es": "Nachos crujientes, queso fundido, guacamole, pico de gallo y crema agria",
            "en": "Crispy nachos, melted cheese, guacamole, pico de gallo and sour cream",
            "ca": "Nachos cruixents, formatge fos, guacamole, pico de gallo i crema agra"
          },
          "price": "7,50€"
        },
        {
          "name": "Ensalada Mixta",
          "tag": {
            "es": "Vegana",
            "en": "Vegan",
            "ca": "Vegana"
          },
          "desc": {
            "es": "Lechuga, tomate, pepino, cebolla, aceitunas, zanahoria, vinagreta de la casa",
            "en": "Lettuce, tomato, cucumber, onion, olives, carrot, house vinaigrette",
            "ca": "Enciam, tomàtiga, cogombre, ceba, olives, pastanaga, vinagreta de la casa"
          },
          "price": "5,50€"
        },
        {
          "name": "Pan de Ajo",
          "tag": {
            "es": "Vegetariana",
            "en": "Vegetarian",
            "ca": "Vegetariana"
          },
          "desc": {
            "es": "Pan artesano con mantequilla de ajo y hierbas, horneado en nuestro horno de leña",
            "en": "Artisan bread with garlic butter and herbs, baked in our wood-fired oven",
            "ca": "Pa artesà amb mantequilla d'all i herbes, cuit al nostre forn de llenya"
          },
          "price": "4,00€"
        },
        {
          "name": "Burrata \u0026 Sobrasada",
          "tag": null,
          "desc": {
            "es": "Burrata fresca, sobrasada mallorquina templada, miel artesana y tostadas",
            "en": "Fresh burrata, warm Mallorcan sobrasada, artisan honey and toast",
            "ca": "Burrata fresca, sobrassada mallorquina tèbia, mel artesana i torrades"
          },
          "price": "9,50€"
        },
        {
          "name": "Bruschetta al Horno",
          "tag": {
            "es": "Vegana",
            "en": "Vegan",
            "ca": "Vegana"
          },
          "desc": {
            "es": "Pan de masa madre, tomate cherry asado, albahaca fresca, ajo y AOVE",
            "en": "Sourdough, roasted cherry tomatoes, fresh basil, garlic and EVOO",
            "ca": "Pa de massa mare, tomàtiga cherry rostida, alfàbega fresca, all i AOVE"
          },
          "price": "6,50€"
        }
      ]
    },
    {
      "id": "vegetales",
      "icon": "leaf",
      "label": {
        "es": "Vegetales",
        "en": "Vegetarian",
        "ca": "Vegetals"
      },
      "sub": {
        "es": "opciones veganas disponibles",
        "en": "vegan options available",
        "ca": "opcions veganes disponibles"
      },
      "items": [
        {
          "name": "Verduras a la Plancha",
          "tag": {
            "es": "Vegana",
            "en": "Vegan",
            "ca": "Vegana"
          },
          "desc": {
            "es": "Selección de verduras de temporada a la plancha con romero, tomillo y AOVE",
            "en": "Selection of seasonal grilled vegetables with rosemary, thyme and EVOO",
            "ca": "Selecció de verdures de temporada a la planxa amb romaní, farigola i AOVE"
          },
          "price": "8,00€"
        },
        {
          "name": "Ensalada Caprese",
          "tag": {
            "es": "Vegetariana",
            "en": "Vegetarian",
            "ca": "Vegetariana"
          },
          "desc": {
            "es": "Tomate de temporada, mozzarella fresca, albahaca, AOVE y reducción de balsámico",
            "en": "Seasonal tomato, fresh mozzarella, basil, EVOO and balsamic reduction",
            "ca": "Tomàtiga de temporada, mozzarella fresca, alfàbega, AOVE i reducció de balsàmic"
          },
          "price": "7,50€"
        },
        {
          "name": "Pizza Vegana",
          "tag": {
            "es": "Vegana",
            "en": "Vegan",
            "ca": "Vegana"
          },
          "desc": {
            "es": "Tomate natural, berenjena, calabacín, pimientos, aceitunas, rúcula, sin lácteos",
            "en": "Natural tomato, aubergine, courgette, peppers, olives, rocket, dairy-free",
            "ca": "Tomàtiga natural, albergínia, carbassó, pebrots, olives, ruca, sense lactis"
          },
          "price": "10,50€"
        }
      ]
    },
    {
      "id": "postres",
      "icon": "heart",
      "label": {
        "es": "Postres",
        "en": "Desserts",
        "ca": "Postres"
      },
      "sub": {
        "es": "el final perfecto",
        "en": "the perfect ending",
        "ca": "el final perfecte"
      },
      "items": [
        {
          "name": "Tiramisú Casero",
          "tag": null,
          "desc": {
            "es": "Receta casera con mascarpone artesano, bizcochos Savoiardi y café italiano",
            "en": "Home recipe with artisan mascarpone, Savoiardi biscuits and Italian coffee",
            "ca": "Recepta casolana amb mascarpone artesà, bescuits Savoiardi i cafè italià"
          },
          "price": "5,50€"
        },
        {
          "name": "Panna Cotta de Limón",
          "tag": null,
          "desc": {
            "es": "Panna cotta con limón de Sóller, coulis de frutos rojos y menta fresca",
            "en": "Panna cotta with Sóller lemon, red fruit coulis and fresh mint",
            "ca": "Panna cotta amb llimona de Sóller, coulis de fruits vermells i menta fresca"
          },
          "price": "5,00€"
        },
        {
          "name": "Tarta de Queso",
          "tag": null,
          "desc": {
            "es": "Tarta de queso al estilo San Sebastián, cremosa y ligeramente quemada por fuera",
            "en": "San Sebastián-style cheesecake, creamy and lightly burnt on the outside",
            "ca": "Pastís de formatge a l'estil Sant Sebastià, cremós i lleugerament cremat per fora"
          },
          "price": "5,50€"
        },
        {
          "name": "Helado Artesano",
          "tag": null,
          "desc": {
            "es": "3 bolas de helado artesano de producción local. Consulte sabores disponibles",
            "en": "3 scoops of artisan ice cream, locally produced. Ask for available flavours",
            "ca": "3 boles de gelat artesà de producció local. Consultau els sabors disponibles"
          },
          "price": "4,50€"
        }
      ]
    }
  ]
};
