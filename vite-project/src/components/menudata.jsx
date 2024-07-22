import {v4 as uuidv4} from 'uuid';

const foodItems = [
    {
        id: uuidv4(),
        name: 'Pizza Margherita',
        description: 'Classic pizza with fresh tomatoes, mozzarella cheese, and basil.',
        price: 10.99,
    },
    {
        id: uuidv4(),
        name: 'Spaghetti Carbonara',
        description: 'Traditional Italian pasta with eggs, cheese, pancetta, and pepper.',
        price: 12.99,
    }, {
        id: uuidv4(),
        name: 'Caesar Salad',
        description: 'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.',
        price: 8.99,
    },
    {
        id: uuidv4(),
        name: 'Grilled Chicken Sandwich',
        description: 'Juicy grilled chicken with lettuce, tomato, and mayo on a toasted bun.',
        price: 9.99,
    },
    {
        id: uuidv4(),
        name: 'Cheeseburger',
        description: 'Classic cheeseburger with American cheese, lettuce, tomato, and pickles.',
        price: 11.99,
    },
    {
        id: uuidv4(),
        name: 'Vegetable Stir Fry',
        description: 'Fresh vegetables stir-fried with soy sauce and served with rice.',
        price: 10.49,
    },
];

export default foodItems