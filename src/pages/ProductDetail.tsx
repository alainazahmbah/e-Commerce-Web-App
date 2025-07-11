import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, Shield, RefreshCw } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-600 text-lg">Product not found.</p>
          <button
            onClick={() => navigate('/products')}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-600 mt-2">{product.category}</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-gray-900">{product.price.toLocaleString()} FCFA</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-500 line-through">{product.originalPrice.toLocaleString()} FCFA</span>
            )}
            {product.originalPrice && (
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                Économisez {(product.originalPrice - product.price).toLocaleString()} FCFA
              </span>
            )}
          </div>

          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Key Features:</h3>
            <ul className="list-disc list-inside space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center space-x-2"
            >
              <ShoppingCart size={20} />
              <span>Add to Cart</span>
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Heart size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
            <div className="flex items-center space-x-3">
            <Truck className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-medium text-gray-900">Free Shipping</p>
                <p className="text-sm text-gray-600">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-green-600" />
            <Shield className="h-6 w-6 text-yellow-600" />
                <p className="font-medium text-gray-900">Secure Payment</p>
                <p className="text-sm text-gray-600">100% protected</p>
              <p className="text-sm text-gray-600">100% protégé</p>
            </div>
            <div className="flex items-center space-x-3">
              <RefreshCw className="h-6 w-6 text-orange-600" />
            <RefreshCw className="h-6 w-6 text-red-600" />
                <p className="font-medium text-gray-900">Easy Returns</p>
                <p className="text-sm text-gray-600">30-day guarantee</p>
              <p className="text-sm text-gray-600">Garantie 30 jours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;