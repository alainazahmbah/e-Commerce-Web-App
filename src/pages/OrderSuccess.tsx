import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Gift } from 'lucide-react';

const OrderSuccess: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <CheckCircle className="mx-auto h-24 w-24 text-green-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Order Placed Successfully!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Thank you for your purchase. Your order is being processed.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <Package className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-medium text-gray-900">Order Number</p>
              <p className="text-sm text-gray-600">#ORD-{Date.now().toString().slice(-6)}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Truck className="h-6 w-6 text-yellow-600" />
            <div>
              <p className="font-medium text-gray-900">Estimated Delivery</p>
              <p className="text-sm text-gray-600">3-5 business days</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Gift className="h-6 w-6 text-red-600" />
            <div>
              <p className="font-medium text-gray-900">Tracking Information</p>
              <p className="text-sm text-gray-600">Will be sent to your email</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            to="/orders"
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-center block"
          >
            View Your Orders
          </Link>
          <Link
            to="/products"
            className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-semibold text-center block"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;