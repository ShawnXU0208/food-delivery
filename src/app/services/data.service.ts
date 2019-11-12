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
        tags: ['chinese', 'asia', 'cantonese'], 
        deliverFee: 6.99,
        deliverTime: "15-20min",
        image: "1.jpeg"
      },

      {
        id: 2,
        name: 'Subway (Bush Inn)',
        tags: ['chinese', 'asia', 'cantonese'],
        deliverFee: 6.99,
        deliverTime: "15-20min",
        image: "2.jpeg"
      },

      {
        id: 3,
        name: 'Dubba Dubba',
        tags: ['chinese', 'asia', 'cantonese'],
        deliverFee: 6.99,
        deliverTime: "15-20min",
        image: "3.jpeg"
      },

      {
        id: 4,
        name: 'Wycola Turkish Kebab',
        tags: ['chinese', 'asia', 'cantonese'],
        deliverFee: 6.99,
        deliverTime: "15-20min",
        image: "4.jpeg"
      },

      {
        id: 5,
        name: 'Velvet Burger (Riccarton)',
        tags: ['chinese', 'asia', 'cantonese'],
        deliverFee: 6.99,
        deliverTime: "15-20min",
        image: "5.jpeg"
      },

      {
        id: 6,
        name: 'Tuk Tuk Thai',
        tags: ['chinese', 'asia', 'cantonese'],
        deliverFee: 6.99,
        deliverTime: "15-20min",
        image: "6.jpeg"
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

    const customers = [];

    return {restuarants, customers, menu};
  }
}
