export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="bg-white p-1 rounded-lg">
          <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">{product.emoji}</div>
              <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-3xl font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="ml-2 text-lg text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
        
        <button className={`w-full py-3 rounded-lg font-medium ${product.inStock ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`} disabled={!product.inStock}>
          {product.inStock ? 'Add to Cart' : 'Notify When Available'}
        </button>
        
        {product.features && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}