import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
// Update the import path to your Cold Americano image
import coldAmericano from '../../images/Coffee/ColdAmericano.png';

const PdColdAmericano = () => {
  const [selectedSize, setSelectedSize] = useState('12oz');
  const [quantity, setQuantity] = useState(1);

  const sizeOptions = ['12oz', '16oz'];
  const prices = {
    '12oz': 49,
    '16oz': 59
  };

  const handleQuantityChange = (increment) => {
    setQuantity(prev => Math.max(1, prev + increment));
  };

  const currentPrice = prices[selectedSize];
  const totalPrice = currentPrice * quantity;

  return (
    <div 
      className="min-h-screen w-full"
      style={{ background: "#D7BDA6" }}
    >
      <NavBar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/coffee" 
          className="inline-flex items-center mb-8 text-[#322315] hover:text-[#4a3422] transition-colors"
          style={{ marginLeft: "100px" }}
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Coffee
        </Link>

        <div className="flex gap-16 items-start" style={{ marginLeft: "100px" }}>
          {/* Product Image */}
          <div className="flex-shrink-0" style={{ marginLeft: "-20px" }}>
            <div 
              className="bg-[#fff3e6] rounded-[30px] p-8 shadow-lg"
              style={{ 
                width: "400px", 
                height: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img
                src={coldAmericano}
                alt="Cold Americano"
                style={{
                  maxWidth: "280px",
                  maxHeight: "280px",
                  objectFit: "contain"
                }}
                className="rounded-3xl"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl font-bold text-[#322315] mb-4 font-mono">
              Cold Americano
            </h1>
            
            <p className="text-[#322315] text-base mb-6 leading-relaxed" style={{ maxWidth: '600px' }}>
              Classic espresso served over ice and diluted with cold water for a bold, refreshing coffee with pure flavor and a cooling finish.
            </p>

            {/* Size & Quantity aligned far apart, label above "-" */}
            <div className="flex items-end justify-between mb-8" style={{maxWidth: '600px'}}>
              {/* Size Selection */}
              <div>
                <h3 className="text-[#322315] font-semibold text-lg mb-3">Size</h3>
                <div className="flex gap-3">
                  {sizeOptions.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-full font-medium transition-all ${
                        selectedSize === size
                          ? 'bg-[#322315] text-white'
                          : 'bg-white text-[#322315] hover:bg-[#f5f5f5]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection, label centered above minus */}
              <div className="flex flex-col items-center">
                <h3 className="text-[#322315] font-semibold text-lg mb-3 text-left w-full">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 rounded-full bg-white hover:bg-[#f5f5f5] flex items-center justify-center text-[#322315] font-bold text-xl"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold text-[#322315] min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 rounded-full bg-white hover:bg-[#f5f5f5] flex items-center justify-center text-[#322315] font-bold text-xl"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Price Display */}
            <div className="mb-6">
              <span className="text-3xl font-bold text-[#322315]">
                ₱{currentPrice}
              </span>
              <span className="text-[#666] ml-2">per cup</span>
            </div>

            {/* Total Price */}
            <div className="mb-8 p-4 bg-white/50 rounded-lg">
              <div className="flex justify-between items-center text-lg">
                <span className="text-[#322315] font-medium">Total:</span>
                <span className="text-2xl font-bold text-[#322315]">
                  ₱{totalPrice}
                </span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-[#322315] text-white py-4 px-8 rounded-full text-lg font-semibold hover:bg-[#4a3422] transition-colors shadow-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdColdAmericano;
