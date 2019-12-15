import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const restuarantsSample = [
  { 
    name: 'Dragon Garden Chinese Restaurant',
    tags: ['Chinese', 'Asian', 'Kiwi'], 
    deliverFee: 9.99,
    deliverTime: "15-20min",
    open: [9,10,9,9,11,12,9],
    close: [18,18,19,20,17,18,19],
    address: "204 Hills Rd, Edgeware, Christchurch, Canterbury 8013",
    phone: "021 033 055",
    description: "consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    image: "1.jpeg",
    rate: 3,
    email: "DragonGarden@gmail.com"
  },

  {
    name: 'Subway (Bush Inn)',
    tags: ['American', 'Kiwi', 'Europe'],
    deliverFee: 2.99,
    deliverTime: "10-15min",
    open: [9,10,9,10,12,11,10],
    close: [18,19,20,20,18,19,20],
    address: "1 Papanui Rd, Carlton,",
    phone: "024 043 025",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem q",
    image: "2.jpeg",
    rate: 4,
    email: "subwayBushInn@gmail.com"
  },

  {
    name: 'Dubba Dubba',
    tags: ['Chinese', 'Turkey', 'Europe'],
    deliverFee: 4.99,
    deliverTime: "15-20min",
    open: [10,9,8,7,7,8,9],
    close: [18,21,20,22,17,18,20],
    address: "326 Colombo St,",
    phone: "022 022 055",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique s",
    image: "3.jpeg",
    rate: 5,
    email: "DubbaDubba@gmail.com"
  },

  {
    name: 'Wycola Turkish Kebab',
    tags: ['Turkey', 'Europe'],
    deliverFee: 6.99,
    deliverTime: "15-24min",
    open: [9,8,9,10,11,8,10],
    close: [11,10,20,21,21,22,20],
    address: "Hoyts Entx, 617-649 Colombo Street, Central Christchurch",
    phone: "021 013 015",
    description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ",
    image: "4.jpeg",
    rate: 2,
    email: "wycolaTurkish@gmail.com"
  },

  {
    name: 'Velvet Burger (Riccarton)',
    tags: ['Kiwi', 'Europe'],
    deliverFee: 7.99,
    deliverTime: "18-24min",
    open: [8,8,9,10,10,12,8],
    close: [18,18,21,20,17,21,19],
    address: "96 Oxford Terrace, Christchurch Central City",
    phone: "021 033 055",
    description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ",
    image: "5.jpeg",
    rate: 5,
    email: "VelvetBurger@gmail.com"
  },

  {
    name: 'Tuk Tuk Thai',
    tags: ['Asian', 'Japanese'],
    deliverFee: 6.99,
    deliverTime: "15-20min",
    open: [7,7,9,9,9,10,10],
    close: [19,18,18,18,18,18,19],
    address: "10 Welles St, Christchurch Central",
    phone: "027 035 055",
    description: "ut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisc",
    image: "6.jpeg",
    rate: 3,
    email: "Tuktukthai@gmail.com"
  }

];

const menuSample = [
  {
    id: 1,
    restuarantId: 2,
    name: 'Meatball Melt Subway Six Inch',
    description: 'Our signature meatballs in rich tomato marinara sauce.',
    category: 'Subway Six Inch',
    price: 7.5,
    image: 'menu-1.png',
  },

  {
    id: 2,
    restuarantId: 2,
    name: 'Carved Turkey Subway Six Inch',
    description: 'Premium carved turkey breast slices. Try with our chunky cranberry relish.',
    category: 'Subway Six Inch',
    price: 8.9,
    image: 'menu-2.png',
  },

  {
    id: 3,
    restuarantId: 2,
    name: 'Meatball Melt Subway Footlong',
    description: 'Our signature meatballs in rich tomato marinara sauce.',
    category: 'Subway Footlong',
    price: 11.8,
    image: 'menu-3.png',
  },

  {
    id: 4,
    restuarantId: 2,
    name: 'Roast Beef Subway Six Inch',
    description: 'Carved roast beef. Try it with smoky tomato chutney.',
    category: 'Subway Six Inch',
    price: 8.9,
    image: 'menu-4.png',
  },

  {
    id: 5,
    restuarantId: 2,
    name: 'Chicken Classic Subway Six Inch',
    description: 'A Subway® classic – a tender chicken patty with a flavour-packed coating.',
    category: 'Subway Six Inch',
    price: 9.5,
    image: 'menu-5.png',
  },   

  {
    id: 6,
    restuarantId: 2,
    name: 'Tuna & Mayo Subway Footlong',
    description: 'Tuna chunks mixed with creamy mayonnaise.',
    category: 'Subway Footlong',
    price: 12.2,
    image: 'menu-6.png',
  },  

  {
    id: 7,
    restuarantId: 2,
    name: 'Buffalo Chicken Subway Footlong',
    description: 'Chicken breast strips marinated in spicy buffalo sauce. Try it with the tangy Blue Cheese or creamy Ranch dressing.',
    category: 'Subway Footlong',
    price: 13.7,
    image: 'menu-7.png',
  }, 

  {
    id: 8,
    restuarantId: 2,
    name: 'Meatball Melt Wrap',
    description: 'Our signature meatballs in rich tomato marinara sauce.',
    category: 'Wraps',
    price: 7.5,
    image: 'menu-8.png',
  },   

  {
    id: 9,
    restuarantId: 2,
    name: 'Carved Turkey Wrap',
    description: 'Premium carved turkey breast slices. Try with our chunky cranberry relish.',
    category: 'Wraps',
    price: 8.9,
    image: 'menu-9.png',
  },   

  {
    id: 10,
    restuarantId: 2,
    name: 'Steak Melt Wrap',
    description: 'Made with juicy diced steak topped. Try it with our smoky Chipotle sauce.',
    category: 'Wraps',
    price: 10.2,
    image: 'menu-10.png',
  }, 

  {
    id: 11,
    restuarantId: 2,
    name: 'Tuna & Mayo Wrap',
    description: 'Tuna chunks mixed with creamy mayonnaise.',
    category: 'Wraps',
    price: 11.2,
    image: 'menu-11.png',
  },  

  {
    id: 12,
    restuarantId: 2,
    name: 'Mediterranean Chicken Grilled Wrap',
    description: 'Mouth-watering chicken breast strips now in a grilled wrap. Try with crumbled feta, mozzarella and pesto mayo, plus our recommended salad combination – spinach, capsicum, tomato, onion and mouth-watering sundried tomatoes.',
    category: 'Grilled Wraps',
    price: 9.5,
    image: 'menu-12.png',
  }, 

  {
    id: 13,
    restuarantId: 2,
    name: 'Habanero Chilli Tuna Grilled Wrap',
    description: 'Our famous tuna and creamy mayo mix, now in a grilled wrap. Try with mozzarella, spinach, capsicum, tomato and onion. Top with habanero hot sauce if you like a touch of spice!',
    category: 'Grilled Wraps',
    price: 8.1,
    image: 'menu-13.png',
  },

  {
    id: 14,
    restuarantId: 2,
    name: 'Italian B.M.T® Grilled Wrap',
    description: 'The Subway® signature Italian B.M.T.® (delicious pepperoni, salami and ham, with marinara sauce), now in a grilled wrap. Try with our recommended salads – spinach, capsicum, tomato and onion – plus melty mozzarella.',
    category: 'Grilled Wraps',
    price: 8.9,
    image: 'menu-14.png',
  },



  {
    id: 15,
    restuarantId: 1,
    name: 'Money Bag',
    description: 'Six pieces. Chopped vegetables and potato served with sweet chilli sauce.',
    category: 'Entrees',
    price: 10,
    image: 'menu-15.png',
  },

  {
    id: 16,
    restuarantId: 1,
    name: 'Tom Yum Soup',
    description: 'Tom yum and vegetables.',
    category: 'Soups',
    price: 15,
    image: 'menu-16.png',
  },

  {
    id: 17,
    restuarantId: 1,
    name: 'Fried Rice',
    description: 'Thai style fried with egg and vegetables.',
    category: 'Rice and Noodles',
    price: 18,
    image: 'menu-17.png',
  },

  {
    id: 18,
    restuarantId: 1,
    name: 'Spring Roll',
    description: 'Six pieces. Chopped vegetables in crispy pastry roll.',
    category: 'Entrees',
    price: 10,
    image: 'menu-18.png',
  },

  {
    id: 19,
    restuarantId: 1,
    name: 'Pad Thai',
    description: 'Stir fried with egg on top with bean sprouts and chop nut.',
    category: 'Rice and Noodles',
    price: 8.9,
    image: 'menu-19.png',
  },

  {
    id: 20,
    restuarantId: 1,
    name: 'Pad See Ew',
    description: 'Stir fried noodles with sweet dark soy sauce and vegetables.',
    category: 'Rice and Noodles',
    price: 18,
    image: 'menu-20.png',
  },

  {
    id: 21,
    restuarantId: 1,
    name: 'Chicken Satay',
    description: 'Four pieces. Turmeric powder and coconut milk with peanut satay sauce.',
    category: 'Entrees',
    price: 12.6,
    image: 'menu-21.png',
  },

  {
    id: 22,
    restuarantId: 1,
    name: 'Ginger Stir Fry',
    description: 'Stir fried with ginger and vegetables.',
    category: 'Rice and Noodles',
    price: 18,
    image: 'menu-22.png',
  },

  {
    id: 23,
    restuarantId: 1,
    name: 'Green Curry',
    description: 'Green curry and vegetables. Served with rice.',
    category: 'Curries',
    price: 18,
    image: 'menu-23.png',
  },

  {
    id: 24,
    restuarantId: 1,
    name: 'Red Curry',
    description: 'Red curry and vegetables. Served with rice.',
    category: 'Curries',
    price: 18,
    image: 'menu-24.png',
  },

  {
    id: 25,
    restuarantId: 1,
    name: 'Cashew Nut',
    description: 'Stir fried with cashew nut and vegetables. Served with rice.',
    category: 'Rice and Noodles',
    price: 18,
    image: 'menu-25.png',
  },

  {
    id: 26,
    restuarantId: 1,
    name: 'Tom Kha Soup',
    description: 'Tom kha with coconut milk and vegetables.',
    category: 'Soups',
    price: 15,
    image: 'menu-26.png',
  },

  {
    id: 27,
    restuarantId: 3,
    name: 'Eggs Benedict with Bacon',
    description: 'Toasted ciabatta with bacon, poached cage-free eggs and creamy hollandaise sauce',
    category: 'All Day Breakfast',
    price: 21.9,
    image: 'menu-27.png',
  },

  {
    id: 28,
    restuarantId: 3,
    name: 'Eggs Benedict with Smoked Salmon and Spinach',
    description: 'Toasted ciabatta with salmon and spinach, poached cage-free eggs and creamy hollandaise sauce',
    category: 'All Day Breakfast',
    price: 21.9,
    image: 'menu-28.png',
  },

  {
    id: 29,
    restuarantId: 3,
    name: 'Eggs Benedict with Mushrooms and Spinach',
    description: 'Toasted ciabatta with mushroom, spinach, poached cage-free eggs and creamy hollandaise sauce',
    category: 'All Day Breakfast',
    price: 20.9,
    image: 'menu-29.png',
  },

  {
    id: 30,
    restuarantId: 3,
    name: 'The Coffee Club Big Breakfast',
    description: 'Tender steak, bacon, chipolata sausages, cage free eggs, mushroom, grilled tomato, hash brown, and toasted ciabatta.',
    category: 'All Day Breakfast',
    price: 28.2,
    image: 'menu-30.png',
  },

  {
    id: 31,
    restuarantId: 3,
    name: 'Potato Rosti with Smashed Avo & Feta',
    description: 'with basil & cashew pesto, baby spinach, poached cage-free egg & your choice of bacon or smoked salmon',
    category: 'All Day Breakfast',
    price: 23,
    image: 'menu-31.png',
  },

  {
    id: 32,
    restuarantId: 3,
    name: 'Mexican Chicken Salad',
    description: 'Grilled chicken breast tossed in Mexican spice mix, cos lettuce, tomato, avocado, spring onion, coriander, corn, cheese, crushed corn chips and creamy chipotle dressing.',
    category: 'Fresh Salads',
    price: 34.7,
    image: 'menu-32.png',
  },

  {
    id: 33,
    restuarantId: 3,
    name: 'Chicken, Spinach and Quinoa Salad',
    description: 'Grilled chicken breast, quinoa, spinach, peas, feta and lightly dressed coleslaw.',
    category: 'Fresh Salads',
    price: 22.4,
    image: 'menu-33.png',
  },

  {
    id: 34,
    restuarantId: 3,
    name: 'Tofu with Asian Slaw',
    description: 'Crisp tofu tossed in fiery sauce, Asian slaw, fried shallots, crunchy rice noodles, coriander, mint, Thai basil dressing',
    category: 'Fresh Salads',
    price: 21.3,
    image: 'menu-34.png',
  },

  {
    id: 35,
    restuarantId: 3,
    name: 'Smokey Beef Brisket Brioche Burger with Seasoned Chips',
    description: 'Slow cooked beef brisket, smokey cola sauce, fresh slaw, herb mayo',
    category: 'Burgers & Sandwiches',
    price: 22.4,
    image: 'menu-35.png',
  },  

  {
    id: 36,
    restuarantId: 3,
    name: 'Crispy Chicken & Bacon Brioche Burger with Seasoned Chips',
    description: 'Crispy chicken breast strips, bacon, cheese, cos lettuce, fiery mayo.',
    category: 'Burgers & Sandwiches',
    price: 23,
    image: 'menu-36.png',
  },  

  {
    id: 37,
    restuarantId: 3,
    name: 'Classic BLT Ciabatta served with Seasoned Chips',
    description: 'Toasted ciabatta with bacon, cos lettuce, tomato, sweet chilli & aioli',
    category: 'Burgers & Sandwiches',
    price: 20.7,
    image: 'menu-37.png',
  }, 

  {
    id: 38,
    restuarantId: 3,
    name: 'Loaded Veggie Ciabatta with Seasoned Chips',
    description: 'Toasted ciabatta, balsamic mushrooms, sage & onion relish, roasted red capsicum, baby spinach, vegan cheese.',
    category: 'Burgers & Sandwiches',
    price: 21.3,
    image: 'menu-38.png',
  }, 

  {
    id: 39,
    restuarantId: 4,
    name: '7.5" Lust Pizza',
    description: '5-pepper pepperoni, salami, triple smoked champagne ham, bacon, chorizo, and lashed with your choice of sauce.',
    category: '7.5" Originals Pizzas',
    price: 11,
    image: 'menu-39.png',
  }, 

  {
    id: 40,
    restuarantId: 4,
    name: '7.5" Greed Pizza',
    description: 'Triple smoked champagne ham, double pineapple, and double cheese.',
    category: '7.5" Originals Pizzas',
    price: 11,
    image: 'menu-40.png',
  }, 

  {
    id: 41,
    restuarantId: 4,
    name: '7.5" Envy Pizza',
    description: 'Salami, triple smoked champagne ham, onions, mushrooms, pineapple, and bacon.',
    category: '7.5" Originals Pizzas',
    price: 11,
    image: 'menu-41.png',
  }, 

  {
    id: 42,
    restuarantId: 4,
    name: '7.5" Wrath Pizza',
    description: '5-pepper pepperoni, onions, capsicum, tomatoes, and chilli.',
    category: '7.5" Originals Pizzas',
    price: 11,
    image: 'menu-42.png',
  }, 

  {
    id: 43,
    restuarantId: 4,
    name: '12" Lust Pizza',
    description: '5-pepper pepperoni, salami, triple smoked champagne ham, bacon, chorizo, and lashed with your choice of sauce',
    category: '12" Originals Pizzas',
    price: 20.5,
    image: 'menu-43.png',
  }, 

  {
    id: 44,
    restuarantId: 4,
    name: '12" Greed Pizza',
    description: 'Triple smoked champagne ham, double pineapple, and double cheese.',
    category: '12" Originals Pizzas',
    price: 20.5,
    image: 'menu-44.png',
  }, 

  {
    id: 45,
    restuarantId: 4,
    name: '12" Pride Pizza',
    description: 'Onions, mushrooms, capsicum, tomatoes, and pineapple.',
    category: '12" Originals Pizzas',
    price: 20.5,
    image: 'menu-45.png',
  }, 

  {
    id: 46,
    restuarantId: 4,
    name: '12" Gluttony Pizza',
    description: 'Onion, garlic, salami, ham, mushroom, pineapple, capsicum, tomato, bacon, black pepper.',
    category: '12" Originals Pizzas',
    price: 20.5,
    image: 'menu-46.png',
  }, 

  {
    id: 47,
    restuarantId: 4,
    name: '7.5" Lust Deluxe Pizza',
    description: 'Marinated strips of steak, black pepper, 5-pepper pepperoni, salami, triple smoked champagne ham, bacon, and smoked chorizo. Lashed with bearnaise sauce.',
    category: '7.5" Gourmet Pizzas',
    price: 12,
    image: 'menu-47.png',
  }, 

  {
    id: 48,
    restuarantId: 4,
    name: '7.5" Pandemonium Pizza',
    description: 'Chicken, cranberry sauce, and camembert.',
    category: '7.5" Gourmet Pizzas',
    price: 12,
    image: 'menu-48.png',
  }, 

  {
    id: 49,
    restuarantId: 4,
    name: '7.5" Brimstone Pizza',
    description: 'Cajun chicken, avocado, onions, tomatoes, chipotle salsa, and swirled with sour cream.',
    category: '7.5" Gourmet Pizzas',
    price: 12,
    image: 'menu-49.png',
  }, 

  {
    id: 50,
    restuarantId: 4,
    name: '7.5" Mordor Pizza',
    description: 'Chicken, smokey BBQ sauce, 5-pepper pepperoni, onions, capsicum, and bacon.',
    category: '7.5" Gourmet Pizzas',
    price: 12,
    image: 'menu-50.png',
  }, 

  {
    id: 51,
    restuarantId: 4,
    name: '7.5" Purgatory Pizza',
    description: 'Feta cheese, spinach, sundried tomatoes, garlic, mushrooms, and onion.',
    category: '7.5" Vegetarian Pizza',
    price: 12,
    image: 'menu-51.png',
  }, 

  {
    id: 52,
    restuarantId: 4,
    name: '7.5" Limbo Pizza',
    description: 'Blue cheese, mushrooms, caramelised onions, and tomatoes.',
    category: '7.5" Vegetarian Pizza',
    price: 12,
    image: 'menu-52.png',
  }, 

  {
    id: 53,
    restuarantId: 5,
    name: 'Combo for One Pita',
    description: 'Choice of Pita, 1 serve of Wedges & your choice of drink.',
    category: 'Top Picks',
    price: 24,
    image: 'menu-53.png',
  }, 

  {
    id: 54,
    restuarantId: 5,
    name: 'Combo for One Salad',
    description: 'Choice of Bowl, 1 serve of Wedges & your choice of drink.',
    category: 'Top Picks',
    price: 25,
    image: 'menu-54.png',
  }, 

  {
    id: 55,
    restuarantId: 5,
    name: 'Combo for Two',
    description: '2 x Pita or Bowl, 2 x Wedges & 2 x Drink',
    category: 'Top Picks',
    price: 48,
    image: 'menu-55.png',
  }, 

  {
    id: 56,
    restuarantId: 5,
    name: 'Family Pack',
    description: '2x Pitas or Bowls, 2x Kids Pitas, 2x Wedges and 2x Drinks.',
    category: 'Top Picks',
    price: 62,
    image: 'menu-56.png',
  }, 

  {
    id: 57,
    restuarantId: 5,
    name: "Chick'n Bacon Crunch",
    description: 'Grilled chicken breast, streaky bacon, lettuce, sliced red onion, cucumber, tomato, smashed avocado, shaved parmesan, pita chips & Caesar dressing.',
    category: 'Designed by Us - Pita',
    price: 11.9,
    image: 'menu-57.png',
  }, 

  {
    id: 58,
    restuarantId: 5,
    name: "The 'Med' Chicken & Falafel (GF)",
    description: 'Grilled chicken breast, falafel, lettuce, mixed green leaves, smashed avocado, roasted red peppers, three-bean mix, red onion, tomato, cucumber, feta, hummus, cucumber yoghurt dressing, sliced almonds',
    category: 'Designed by Us - Pita',
    price: 11.9,
    image: 'menu-58.png',
  }, 

  {
    id: 59,
    restuarantId: 5,
    name: "Falafel, Beets & Beans (V)(GF)(DF)",
    description: 'Grilled falafel, smashed avocado, three- bean mix, red cabbage & carrot mix, pickled beets, tomato, hummus, rosemary vinaigrette & toasted seeds.',
    category: 'Designed by Us - Pita',
    price: 11.9,
    image: 'menu-59.png',
  }, 

  {
    id: 60,
    restuarantId: 5,
    name: "Panko & Quinoa Chicken",
    description: 'Panko & quinoa crumbed chicken, mixed green leaves, smashed egg, grilled kumara, pickled beets, pita chips, lemon dijon dressing, tomato kasundi & toasted seeds.',
    category: 'Designed by Us - Pita',
    price: 11.9,
    image: 'menu-60.png',
  }, 

  {
    id: 61,
    restuarantId: 5,
    name: "Chick'n Bacon Crunch Bowl",
    description: 'Grilled chicken breast, streaky bacon, lettuce, sliced red onion, cucumber, tomato, smashed avocado, shaved parmesan, pita chips & Caesar dressing.',
    category: 'Designed by Us - Bowl',
    price: 12.9,
    image: 'menu-61.png',
  }, 

  {
    id: 62,
    restuarantId: 5,
    name: "The 'Med' Chicken & Falafel (GF)",
    description: 'Grilled chicken breast, falafel, lettuce, mixed green leaves, smashed avocado, roasted red peppers, three-bean mix, red onion, tomato, cucumber, feta, hummus, cucumber yoghurt dressing, sliced almonds',
    category: 'Designed by Us - Bowl',
    price: 12.9,
    image: 'menu-62.png',
  }, 

  {
    id: 63,
    restuarantId: 5,
    name: "Falafel, Beets & Beans Bowl (V)(GF)(DF)",
    description: 'Grilled falafel, smashed avocado, three- bean mix, red cabbage & carrot mix, pickled beets, tomato, hummus, rosemary vinaigrette & toasted seeds',
    category: 'Designed by Us - Bowl',
    price: 12.9,
    image: 'menu-63.png',
  },

  {
    id: 64,
    restuarantId: 5,
    name: "Lisa's Refuel Lamb (GF)",
    description: 'Grilled Lamb, mixed green leaves, cucumber, tomato, carrot, pickled beets, three-bean mix, feta, rosemary vinaigrette, cucumber yogurt dressing and toasted seeds',
    category: 'Designed by Us - Bowl',
    price: 12.5,
    image: 'menu-64.png',
  },

  {
    id: 65,
    restuarantId: 5,
    name: "Panko & Quinoa Chicken Bowl",
    description: 'Panko & quinoa crumbed chicken, mixed green leaves, smashed egg, grilled kumara, pickled beets, pita chips, lemon dijon dressing, tomato kasundi & toasted seeds.',
    category: 'Designed by Us - Bowl',
    price: 12.9,
    image: 'menu-65.png',
  },

  {
    id: 66,
    restuarantId: 5,
    name: "Bacon, Eggs & Avo Bowl (GF)",
    description: 'Scrambled eggs, bacon, cabanossi sausage, mixed green leaves, quinoa & brown rice, roasted red peppers, tomato, smashed avocado, tomato kasundi & aioli.',
    category: 'Designed by Us - Bowl',
    price: 12.9,
    image: 'menu-66.png',
  },

  {
    id: 67,
    restuarantId: 5,
    name: "Chicken (GF)",
    description: 'Scrambled eggs, bacon, cabanossi sausage, mixed green leaves, quinoa & brown rice, roasted red peppers, tomato, smashed avocado, tomato kasundi & aioli.',
    category: "Kid's Pita's",
    price: 6,
    image: 'menu-67.png',
  },

 {
    id: 68,
    restuarantId: 5,
    name: "Ham Pita (GF)",
    description: 'Rolled or Flat Grilled Pita, your choice of up to 3 fillings.',
    category: "Kid's Pita's",
    price: 6,
    image: 'menu-68.png',
  },

 {
    id: 69,
    restuarantId: 5,
    name: "Bacon (GF)",
    description: 'Rolled or Flat Grilled Pita, your choice of up to 3 fillings.',
    category: "Kid's Pita's",
    price: 6,
    image: 'menu-69.png',
  },

 {
    id: 70,
    restuarantId: 6,
    name: "Mexicano's Corn Fritters (V)",
    description: 'Freshly Cooked served with Chipotle mayonnaise, goats queso and lime.',
    category: "Starters",
    price: 7,
    image: 'menu-70.png',
  },

 {
    id: 71,
    restuarantId: 6,
    name: "Crispy Fried Potato Skins (V)",
    description: 'With jalapeno, queso fundido Mexicanos cheese sauce.',
    category: "Starters",
    price: 11,
    image: 'menu-71.png',
  },

 {
    id: 72,
    restuarantId: 6,
    name: "Guacamole Tomato Salsa and Fresh Corn Chips (V)",
    description: 'Freshly Cooked corn chips with guacamole and tomato pico de gallo salsa.',
    category: "Starters",
    price: 13.5,
    image: 'menu-72.png',
  },

 {
    id: 73,
    restuarantId: 6,
    name: "Mexicano's Fried Chicken The Original",
    description: "Twice cooked pork belly given the Mexicano's original treatment.",
    category: "Specialities",
    price: 16.5,
    image: 'menu-73.png',
  },

 {
    id: 74,
    restuarantId: 6,
    name: "Fried Pork Belly The Original",
    description: "Twice cooked pork belly given the Mexicano's original treatment.",
    category: "Specialities",
    price: 16.5,
    image: 'menu-74.png',
  },

 {
    id: 75,
    restuarantId: 6,
    name: "Adobo Chicken Taco",
    description: "MOQ any two pieces. With hacked guacamole, pickled mango and aioli.",
    category: "Soft Shell Tacos",
    price: 9.5,
    image: 'menu-75.png',
  },

 {
    id: 76,
    restuarantId: 6,
    name: "Grilled Fish Taco",
    description: "MOQ any two pieces. With salsa mojito, coriander and aioli.",
    category: "Soft Shell Tacos",
    price: 9.5,
    image: 'menu-76.png',
  },

 {
    id: 77,
    restuarantId: 6,
    name: "Cumin Battered Fish Taco",
    description: "With salsa mojito, coriander and aioli. MOQ any two pieces.",
    category: "Soft Shell Tacos",
    price: 9.5,
    image: 'menu-77.png',
  },

 {
    id: 78,
    restuarantId: 6,
    name: "Fire Grilled Prawns Taco",
    description: "Chipotle mayonnaise, avocado and tomatillo salsa. MOQ any two pieces.",
    category: "Soft Shell Tacos",
    price: 9.5,
    image: 'menu-78.png',
  },

 {
    id: 79,
    restuarantId: 6,
    name: "Pulled Pork Taco",
    description: "Fire grilled pineapple and charred spring onion crema. MOQ any two pieces.",
    category: "Soft Shell Tacos",
    price: 9.5,
    image: 'menu-79.png',
  },

 {
    id: 80,
    restuarantId: 6,
    name: "Sticky Beef Quesadilla",
    description: "With portobello mushrooms, spring onion and queso.",
    category: "Quesadilla",
    price: 17.5,
    image: 'menu-80.png',
  },

 {
    id: 81,
    restuarantId: 6,
    name: "Charcoal Chicken Quesadilla",
    description: "Smoked cigar onion, capsicum and queso.",
    category: "Quesadilla",
    price: 17.5,
    image: 'menu-81.png',
  },

 {
    id: 82,
    restuarantId: 6,
    name: "Pulled Pork Quesadilla",
    description: "Low & Slow pulled pork shoulder, spring onion crema and queso.",
    category: "Quesadilla",
    price: 17.5,
    image: 'menu-82.png',
  },
];


export class Restuarant{
  private id: number;
  private name: string;
  private tags: string[];
  private deliverFee: number;
  private deliverTime: string;
  private open: number[];
  private close: number[];
  private address: string;
  private phone: string;
  private description: string;
  private image: string;
  private rate: number;
  private email: string;

  constructor(name: string, tags: string[], deliverFee: number, deliverTime: string, open: number[], close: number[], address: string, phone: string, description: string, image: string, rate: number, email: string){
    this.id = 0;
    this.name = name;
    this.tags = tags;
    this.deliverFee = deliverFee;
    this.deliverTime = deliverTime;
    this.open = [];
    this.close = [];
    this.address = address;
    this.phone = phone;
    this.description = description;
    this.image = image;
    this.rate = rate;
    this.email = email; 

    for(const time of open){
      this.open.push(time);
    }

    for(const time of close){
      this.close.push(time);
    }
  }

  public getId(){
    return this.id;
  }

  public setId(id){
    this.id = id;
  }
}


export class MenuItem{
  private id: number;
  private restuarantId: number;
  private name: string;
  private description: string;
  private category: string;
  private price: number;
  private image: string;

  constructor(name: string, restuarantId: number, description: string, category: string, price: number, image: string){
    this.name = name;
    this.restuarantId = restuarantId;
    this.description = description;
    this.category = category;
    this.price = price;
    this.image = image;
    this.id = 0;
  }

  public getId(){
    return this.id;
  }

  public setId(id){
    this.id = id;
  }
}

@Injectable({
  providedIn: 'root'
})

export class RestuarantsService {

  //private apiURL = "http://localhost:4200/api/restuarants";
  private restuarants: any;
  private restuarantNum = 0;
  private nextRestuarantId = 1;

  private menuItems: any;
  private menuItemNum = 0;
  private nextMenuId = 1;

  constructor(private http: HttpClient){

    // fetch restuarants information
    this.getRestuarants().subscribe((data) => {

      this.restuarants = data;
      for(const restuarant of this.restuarants){
        this.restuarantNum += 1;
        if(restuarant.id >= this.nextRestuarantId){
          this.nextRestuarantId = restuarant.id + 1;
        }
      }  
      if(this.restuarantNum == 0){
        //import sample restuarants when it's empty     
        this.importRestuarantsSample();
      }
    });

    //fetch menu information
    this.getMenuItems().subscribe((data) => {
      this.menuItems = data;
      for(const menuItem of this.menuItems){
        this.menuItemNum += 1;
        if(menuItem.id >= this.nextMenuId){
          this.nextMenuId = menuItem.id + 1;
        }
      }

      if(this.menuItemNum == 0){
        //import sample menu when it's empty
        this.importMenusSample();
      }
    });
  }

  private importRestuarantsSample(){
    for(const restuarantData of restuarantsSample){
      let restuarantObj = new Restuarant(
        restuarantData.name,
        restuarantData.tags,
        restuarantData.deliverFee,
        restuarantData.deliverTime,
        restuarantData.open,
        restuarantData.close,
        restuarantData.address,
        restuarantData.phone,
        restuarantData.description,
        restuarantData.image,
        restuarantData.rate,
        restuarantData.email
      );

      restuarantObj.setId(this.nextRestuarantId);
      this.nextRestuarantId += 1;
      this.addRestuarant(restuarantObj).subscribe(data => {
        this.restuarants.push(restuarantObj);
      });
    }
  }

  private importMenusSample(){

    for(const menuItemData of menuSample){
      let menuObj = new MenuItem(
        menuItemData.name,
        menuItemData.restuarantId,
        menuItemData.description,
        menuItemData.category,
        menuItemData.price,
        menuItemData.image
      );

      menuObj.setId(this.nextMenuId);
      this.nextMenuId += 1;
      this.addMenuItem(menuObj).subscribe(data => {
        this.menuItems.push(menuObj);
      });
    }
  }

  public getRestuarants(){
    return this.http.get('/api/restuarants');
  }

  public addRestuarant(newRestuarant: Restuarant){
    return this.http.post<any>('/api/restuarants/add', {newRestuarant})
            .pipe(map(data => {
              return data;
            }));
  }

  public getMenuItems(){
    return this.http.get('/api/menus');
  }

  public addMenuItem(newMenuItem: MenuItem){
    return this.http.post<any>('/api/menus/add', {newMenuItem})
            .pipe(map(data => {
              return data;
            }));
  }

  public getRestuarantById(restuarantId: number){
    //const restuarantFound = this.restuarants.find(restuarant => restuarant.getId() == restuarantId);
    let param: any = {'id': restuarantId};
    return this.http.get('/api/restuarants', {params: param});
  }

  public getRestuarantMenu(restuarantId: number){
    let param: any = {'rid': restuarantId};
    return this.http.get('/api/menus', {params: param});
  }

  public getMenuById(menuId: number){
    let param: any = {'mid': menuId};
    return this.http.get('/api/menus', {params: param});
  }


}
