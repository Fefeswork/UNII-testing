export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/images/za.png'),
    },
    {
        id: 2,
        name: 'Coffee',
        image: require('../assets/images/coffee.png'),
    },
    {
        id: 3,
        name: 'Pastry',
        image: require('../assets/images/pastry.png'),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../assets/images/c-food.png'),
    },
    {
        id: 5,
        name: 'Hotdogs',
        image: require('../assets/images/hdog.png'),
    },
    {
        id: 6,
        name: 'Snacks',
        image: require('../assets/images/snack.png'),
    },

]


export const featured = {
    id: 1,
    title: 'East Campus Eateries',
    description: 'From the Matrix to Senate house',
    restaurants: [
        {
            id: 1,
            name: 'Chinese Lantern',
            image: require('../assets/images/cl.jpg'),
            description: 'Chinese food to feed your taste buds',
            lng: -85.5324269,
            lat: 38.2145602,
            address: 'The Matrix',
            stars: 4,
            reviews: '4.4k',
            category: 'Chinese',
            dishes: [
                {
                   id: 1,
                   name: 'Spring Rolls',
                   description: '2 Chicken or Beef spring rolls',
                   price: 20,
                   image:  require('../assets/images/sr.jpg')
                },
                {
                   id: 2,
                   name: 'Soup Dumplings',
                   description: 'Pork dumplings',
                   price: 35,
                   image:  require('../assets/images/soup-dumplings.jpg')
                },
                {
                   id: 3,
                   name: 'Chow Mein',
                   description: 'Beef or Chicken chow mein',
                   price: 40,
                   image:  require('../assets/images/chow-mein.jpg')
                },
            ]
    
        },
        {
            id: 2,
            name: 'Xpresso',
            image: require('../assets/images/xpresso.jpg'),
            description: 'Warm drinks and Pastries',
            lng: -85.5324269,
            lat: 38.2145602,
            address: 'The Matrix',
            stars: 4,
            reviews: '4.4k',
            category: 'Coffee, Pastries',
            dishes: [
                {
                   id: 1,
                   name: 'Custard Croissant',
                   description: 'Delicious pastry',
                   price: 15,
                   image:  require('../assets/images/croissant.jpeg')
                },
                {
                   id: 2,
                   name: 'Breakfast cup',
                   description: 'Yoghurt, granola and berries',
                   price: 20,
                   image:  require('../assets/images/breakfastcup.jpg')
                },
                {
                   id: 3,
                   name: 'Cofee',
                   description: 'Warm drink',
                   price: 10,
                   image:  require('../assets/images/xcoffee.jpg')
                },
            ]
    
        },
        {
            id: 3,
            name: 'Jimmys',
            image: require('../assets/images/Jimmys.jpg'),
            description: 'Pizza,Kotas,Chips',
            lng: -85.5324269,
            lat: 38.2145602,
            address: 'The Matrix',
            stars: 4,
            reviews: '4.4k',
            category: 'Pizza, Fast food',
            dishes: [
                {
                   id: 1,
                   name: 'Kota',
                   description: 'Meaty Kota',
                   price: 40,
                   image:  require('../assets/images/kota.jpeg')
                },
                {
                   id: 2,
                   name: 'Pizza',
                   description: 'Meaty pizza, with famous Jimmys sauce',
                   price: 100,
                   image:  require('../assets/images/pizzaa.jpg')
                },
                {
                   id: 3,
                   name: 'Torpedo killer box',
                   description: 'Chips, meat and sauce',
                   price: 60,
                   image:  require('../assets/images/killerbox.jpeg')
                },
            ]
    
        }
    ]
}