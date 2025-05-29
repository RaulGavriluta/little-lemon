import margherita from '../icons_assets/margherita.jpg'
import salami from '../icons_assets/salami.jpg'
import prosciutto from '../icons_assets/prosciutto.jpg'
import carbonara from '../icons_assets/carbonara.jpg'
import bolognese from '../icons_assets/bolognese.jpg'
import genovese from '../icons_assets/genovese.jpg'
import sparkling from '../icons_assets/sparkling.jpg'
import lemonade from '../icons_assets/lemonade.jpg'
import espresso from '../icons_assets/espresso.jpg'
import caprese from '../icons_assets/caprese.jpg'
import caesar from '../icons_assets/caesar.jpg'
import arugula from '../icons_assets/arugula.jpg'
import tiramisu from '../icons_assets/tiramisu.jpg'
import pannaCotta from '../icons_assets/pannaCotta.jpg'
import cannoli from '../icons_assets/cannoli.jpg'

export const menuItems = [
  // Pizzas
  { id: 1, title: "Margherita", category: "Pizza", price: "7.50$", description: "tomato sauce, fresh mozzarella, fresh basil, olive oil, and salt", image: margherita },
  { id: 2, title: "Salami", category: "Pizza", price: "9$", description: "tomato sauce, mozzarella cheese, salami slices, olive oil, and oregano", image: salami },
  { id: 3, title: "Prosciutto", category: "Pizza", price: "9.50$", description: "tomato sauce, mozzarella cheese, prosciutto (cured ham), arugula, parmesan flakes, olive oil", image: prosciutto },

  // Pasta
  { id: 4, title: "Carbonara", category: "Pasta", price: "10.00$", description: "spaghetti, egg yolk, pecorino romano, guanciale, and black pepper", image: carbonara },
  { id: 5, title: "Bolognese", category: "Pasta", price: "11.00$", description: "tagliatelle pasta, ground beef ragù, tomato sauce, carrots, celery, onion", image: bolognese },
  { id: 6, title: "Pesto Genovese", category: "Pasta", price: "9.50$", description: "trofie pasta, basil pesto sauce, parmesan, pine nuts, and olive oil", image: genovese },

  // Drinks
  { id: 7, title: "Sparkling Water", category: "Drinks", price: "2.00$", description: "chilled sparkling mineral water", image: sparkling},
  { id: 8, title: "Lemonade", category: "Drinks", price: "2.50$", description: "Italian-style lemonade, lightly carbonated", image: lemonade},
  { id: 9, title: "Espresso", category: "Drinks", price: "1.80$", description: "classic Italian espresso, single shot", image: espresso },

  // Salads
  { id: 10, title: "Caprese Salad", category: "Salads", price: "6.50$", description: "fresh tomatoes, mozzarella, basil, olive oil, and balsamic glaze", image: caprese },
  { id: 11, title: "Caesar Salad", category: "Salads", price: "7.00$", description: "romaine lettuce, parmesan, croutons, and Caesar dressing", image: caesar },
  { id: 12, title: "Arugula & Parmesan", category: "Salads", price: "6.80$", description: "arugula leaves, shaved parmesan, lemon vinaigrette", image: arugula },

  // Desserts
  { id: 13, title: "Tiramisu", category: "Desserts", price: "5.50$", description: "layers of mascarpone, espresso-soaked ladyfingers, cocoa powder", image: tiramisu },
  { id: 14, title: "Panna Cotta", category: "Desserts", price: "5.00$", description: "vanilla cream pudding topped with berry sauce", image: pannaCotta },
  { id: 15, title: "Cannoli", category: "Desserts", price: "4.80$", description: "crispy pastry shells filled with sweet ricotta cream", image: cannoli },
];

export const menuCategories = [
    'Pizza', 'Pasta', 'Salads', 'Desserts', 'Drinks'
]