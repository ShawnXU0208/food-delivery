import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{
  createDb() {
    const restuarants = [
      { id: 1,
        name: 'Dragon Garden Chinese Restaurant',
        tags: ['Chinese', 'Asian', 'Kiwi'], 
        deliverFee: 6.99,
        deliverTime: "15-20min",
        open: 9,
        close: 18,
        address: "204 Hills Rd, Edgeware, Christchurch, Canterbury 8013",
        phone: "021 033 055",
        description: "consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
        image: "1.jpeg",
        rate: 3,
        email: "DragonGarden@gmail.com"
      },

      {
        id: 2,
        name: 'Subway (Bush Inn)',
        tags: ['American', 'Kiwi', 'Europe'],
        deliverFee: 6.99,
        deliverTime: "10-15min",
        open: 10,
        close: 15,
        address: "1 Papanui Rd, Carlton,",
        phone: "024 043 025",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem q",
        image: "2.jpeg",
        rate: 4,
        email: "subwayBushInn@gmail.com"
      },

      {
        id: 3,
        name: 'Dubba Dubba',
        tags: ['Chinese', 'Turkey', 'Europe'],
        deliverFee: 6.99,
        deliverTime: "15-20min",
        open: 8,
        close: 18,
        address: "326 Colombo St,",
        phone: "022 022 055",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique s",
        image: "3.jpeg",
        rate: 5,
        email: "DubbaDubba@gmail.com"
      },

      {
        id: 4,
        name: 'Wycola Turkish Kebab',
        tags: ['Turkey', 'Europe'],
        deliverFee: 6.99,
        deliverTime: "15-24min",
        open: 9,
        close: 19,
        address: "Hoyts Entx, 617-649 Colombo Street, Central Christchurch",
        phone: "021 013 015",
        description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ",
        image: "4.jpeg",
        rate: 2,
        email: "wycolaTurkish@gmail.com"
      },

      {
        id: 5,
        name: 'Velvet Burger (Riccarton)',
        tags: ['Kiwi', 'Europe'],
        deliverFee: 6.99,
        deliverTime: "18-24min",
        open: 12,
        close: 20,
        address: "96 Oxford Terrace, Christchurch Central City",
        phone: "021 033 055",
        description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ",
        image: "5.jpeg",
        rate: 5,
        email: "VelvetBurger@gmail.com"
      },

      {
        id: 6,
        name: 'Tuk Tuk Thai',
        tags: ['Asian', 'Japanese'],
        deliverFee: 6.99,
        deliverTime: "15-20min",
        open: 9,
        close: 20,
        address: "10 Welles St, Christchurch Central",
        phone: "027 035 055",
        description: "ut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisc",
        image: "6.jpeg",
        rate: 3,
        email: "Tuktukthai@gmail.com"
      }

    ];

    const menu = [
      {
        id: 1,
        name: 'Meatball Melt Subway Six Inch',
        description: 'Our signature meatballs in rich tomato marinara sauce.',
        category: 'Subway Six Inch',
        price: 7.5,
        image: 'menu-1.png',
      },

      {
        id: 2,
        name: 'Carved Turkey Subway Six Inch',
        description: 'Premium carved turkey breast slices. Try with our chunky cranberry relish.',
        category: 'Subway Six Inch',
        price: 8.9,
        image: 'menu-2.png',
      },

      {
        id: 3,
        name: 'Meatball Melt Subway Footlong',
        description: 'Our signature meatballs in rich tomato marinara sauce.',
        category: 'Subway Footlong',
        price: 11.8,
        image: 'menu-3.png',
      },

      {
        id: 4,
        name: 'Roast Beef Subway Six Inch',
        description: 'Carved roast beef. Try it with smoky tomato chutney.',
        category: 'Subway Six Inch',
        price: 8.9,
        image: 'menu-4.png',
      },

      {
        id: 5,
        name: 'Chicken Classic Subway Six Inch',
        description: 'A Subway® classic – a tender chicken patty with a flavour-packed coating.',
        category: 'Subway Six Inch',
        price: 9.5,
        image: 'menu-5.png',
      },   

      {
        id: 6,
        name: 'Tuna & Mayo Subway Footlong',
        description: 'Tuna chunks mixed with creamy mayonnaise.',
        category: 'Subway Footlong',
        price: 12.2,
        image: 'menu-6.png',
      },  

      {
        id: 7,
        name: 'Buffalo Chicken Subway Footlong',
        description: 'Chicken breast strips marinated in spicy buffalo sauce. Try it with the tangy Blue Cheese or creamy Ranch dressing.',
        category: 'Subway Footlong',
        price: 13.7,
        image: 'menu-7.png',
      }, 

      {
        id: 8,
        name: 'Meatball Melt Wrap',
        description: 'Our signature meatballs in rich tomato marinara sauce.',
        category: 'Wraps',
        price: 7.5,
        image: 'menu-8.png',
      },   

      {
        id: 9,
        name: 'Carved Turkey Wrap',
        description: 'Premium carved turkey breast slices. Try with our chunky cranberry relish.',
        category: 'Wraps',
        price: 8.9,
        image: 'menu-9.png',
      },   

      {
        id: 10,
        name: 'Steak Melt Wrap',
        description: 'Made with juicy diced steak topped. Try it with our smoky Chipotle sauce.',
        category: 'Wraps',
        price: 10.2,
        image: 'menu-10.png',
      }, 

      {
        id: 11,
        name: 'Tuna & Mayo Wrap',
        description: 'Tuna chunks mixed with creamy mayonnaise.',
        category: 'Wraps',
        price: 11.2,
        image: 'menu-11.png',
      },  

      {
        id: 12,
        name: 'Mediterranean Chicken Grilled Wrap',
        description: 'Mouth-watering chicken breast strips now in a grilled wrap. Try with crumbled feta, mozzarella and pesto mayo, plus our recommended salad combination – spinach, capsicum, tomato, onion and mouth-watering sundried tomatoes.',
        category: 'Grilled Wraps',
        price: 9.5,
        image: 'menu-12.png',
      }, 

      {
        id: 13,
        name: 'Habanero Chilli Tuna Grilled Wrap',
        description: 'Our famous tuna and creamy mayo mix, now in a grilled wrap. Try with mozzarella, spinach, capsicum, tomato and onion. Top with habanero hot sauce if you like a touch of spice!',
        category: 'Grilled Wraps',
        price: 8.1,
        image: 'menu-13.png',
      },

      {
        id: 14,
        name: 'Italian B.M.T® Grilled Wrap',
        description: 'The Subway® signature Italian B.M.T.® (delicious pepperoni, salami and ham, with marinara sauce), now in a grilled wrap. Try with our recommended salads – spinach, capsicum, tomato and onion – plus melty mozzarella.',
        category: 'Grilled Wraps',
        price: 8.9,
        image: 'menu-14.png',
      },

    ];

    const customers = [
      {
        id: 1,
        firstName: "shawn",
        lastName: "Xu",
        email: "xusuyuan0208@gmail.com",
        phone: "0210400306",
        password: "19940208xsy",
      },
    ];

    return {restuarants, customers, menu};
  }
}
