const placeholderImg = 'https://images.unsplash.com/photo-1543352634-8732d4fc8f30?q=80&w=1200&auto=format&fit=crop';

const recipes = [
  {
    id: 'noodles-stirfry',
    title: 'STIR-FRIED NOODLES',
    categories: ['Asian', 'Vegan', 'Quick'],
    time: '45 mins',
    serves: 2,
    rating: 4,
    description: 'A healthy Chinese for all the family; quick and simple. Vegan friendly!',
    longDescription:
      'These stir-fried noodles are packed with colorful veggies and a savory sauce. Perfect for a weeknight dinner and friendly for plant-based diets.',
    // Updated to a more representative noodle dish; shows noodles/vegetables/chopsticks
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    alt: 'Stir-fried noodles with vegetables and chopsticks',
  },
  {
    id: 'med-salad',
    title: 'MEDITERRANEAN SALAD',
    categories: ['Mediterranean', 'Vegetarian', 'Quick'],
    time: '20 mins',
    serves: 4,
    rating: 5,
    description: 'Crisp cucumbers, tomatoes, feta, and olives tossed in a zesty dressing.',
    longDescription:
      'A refreshing salad with Mediterranean staples: cucumbers, tomatoes, Kalamata olives, and feta cheese in a lemon-oregano vinaigrette.',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=1200&auto=format&fit=crop',
    alt: 'Mediterranean salad with feta and olives',
  },
  {
    id: 'taco-bowl',
    title: 'SPICY TACO BOWL',
    categories: ['Mexican', 'Gluten-free'],
    time: '35 mins',
    serves: 3,
    rating: 4,
    description: 'Spiced beans, charred corn, avocado, and salsa over rice.',
    longDescription:
      'Build-your-own taco bowl with seasoned beans, rice, corn, avocado, and fresh salsa. Customize heat to your preference.',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=1200&auto=format&fit=crop',
    alt: 'Spicy taco bowl with beans and avocado',
  },
  {
    id: 'pancakes',
    title: 'FLUFFY PANCAKES',
    categories: ['Breakfast', 'Vegetarian'],
    time: '25 mins',
    serves: 4,
    rating: 5,
    description: 'Light and fluffy pancakes with a hint of vanilla.',
    longDescription:
      'Weekend-worthy pancakes that are simple to make and irresistibly fluffy. Serve with berries and maple syrup.',
    image: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?q=80&w=1200&auto=format&fit=crop',
    alt: 'Stack of pancakes with blueberries and maple syrup',
  },
  {
    id: 'pasta-primavera',
    title: 'PASTA PRIMAVERA',
    categories: ['Italian', 'Vegetarian'],
    time: '30 mins',
    serves: 2,
    rating: 4,
    description: 'Spring vegetables tossed with pasta and a light sauce.',
    longDescription:
      'A colorful mix of seasonal vegetables tossed with al dente pasta and a light, aromatic sauce.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop', // Vibrant pasta primavera with lots of vegetables
    alt: 'Pasta Primavera with colorful vegetables',
  },
];

export default recipes;
