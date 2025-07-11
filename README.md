# Marché Mokolo - Cameroonian E-commerce Platform

A modern, responsive e-commerce platform designed specifically for the Cameroonian market, featuring authentic local products and culturally relevant shopping experiences.

## 🌍 About

Marché Mokolo is an online marketplace that brings the traditional Cameroonian market experience to the digital world. Named after the famous Mokolo Market in Bamenda, this platform offers over 100 authentic Cameroonian grocery products with local pricing in CFA francs.

## ✨ Features

### 🛒 E-commerce Functionality
- **Product Catalog**: 100+ authentic Cameroonian products across 7 categories
- **Shopping Cart**: Add, remove, and manage items with quantity controls
- **Checkout Process**: Secure payment flow with shipping information
- **User Authentication**: Login and signup functionality
- **Order Management**: Order confirmation and success tracking

### 🎨 User Experience
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Search & Filter**: Find products by name, category, and price range
- **Product Reviews**: Customer ratings and feedback system
- **Wishlist**: Save favorite products for later
- **Multi-view Options**: Grid and list view for product browsing

### 🇨🇲 Cameroonian Market Focus
- **Local Products**: Traditional items like plantain, palm oil, stockfish, garri
- **CFA Pricing**: All prices displayed in Central African CFA francs
- **Cultural Relevance**: Product descriptions and features tailored for local market
- **Regional Delivery**: Free delivery on orders over 30,000 FCFA

## 🛍️ Product Categories

1. **Fresh Produce** (15 products)
   - Plantains, Yam, Cocoyam, Vegetables, Hot Peppers

2. **Grains & Cereals** (15 products)
   - Rice varieties, Corn, Cassava flour, Garri, Beans

3. **Protein** (15 products)
   - Stockfish, Fresh meat, Eggs, Traditional proteins

4. **Cooking Oils** (10 products)
   - Palm oil, Groundnut oil, Coconut oil, Vegetable oils

5. **Condiments** (15 products)
   - Groundnut paste, Crayfish, Maggi cubes, Sauces

6. **Spices** (15 products)
   - Ginger, Garlic, Traditional African spices

7. **Beverages** (15 products)
   - Palm wine, Fresh juices, Herbal teas, Local drinks

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **State Management**: React Context API
- **Local Storage**: Browser localStorage for cart persistence

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd marche-mokolo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── ProductCard.tsx # Product display card
├── contexts/           # React Context providers
│   ├── AuthContext.tsx # Authentication state
│   └── CartContext.tsx # Shopping cart state
├── data/              # Static data and mock APIs
│   └── products.ts    # Product catalog
├── pages/             # Route components
│   ├── Home.tsx       # Landing page
│   ├── Products.tsx   # Product listing
│   ├── Cart.tsx       # Shopping cart
│   ├── Checkout.tsx   # Checkout process
│   └── Auth/          # Authentication pages
├── types/             # TypeScript type definitions
└── styles/            # Global styles
```

## 🎯 Key Features Implementation

### Authentication System
- Mock authentication with localStorage persistence
- User profile management
- Protected routes for checkout

### Shopping Cart
- Persistent cart state across sessions
- Quantity management and price calculations
- Tax calculation (19.25% VAT for Cameroon)

### Product Management
- Comprehensive product catalog with images
- Search and filtering capabilities
- Category-based organization

### Responsive Design
- Mobile-first approach
- Breakpoint optimization for all screen sizes
- Touch-friendly interface elements

## 💰 Pricing Structure

- **Currency**: Central African CFA Franc (FCFA)
- **Price Range**: 800 - 25,000 FCFA
- **Free Delivery**: Orders over 30,000 FCFA
- **Tax Rate**: 19.25% (Cameroon VAT)

## 🌟 Cultural Authenticity

- **Local Products**: Items commonly found in Cameroonian markets
- **Regional Names**: Authentic product names and descriptions
- **Market Context**: Pricing and quantities relevant to local shopping habits
- **Visual Representation**: Images featuring people of appropriate ethnicity

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Marché Mokolo**
- Location: Mokolo Market, Bamenda, North West Region, Cameroon
- Email: support@marchemokolo.cm
- Phone: +237 6XX XX XX XX

## 🙏 Acknowledgments

- Inspired by traditional Cameroonian markets
- Built with modern web technologies
- Designed for the African e-commerce landscape

---

**Made with ❤️ for the Cameroonian market**
