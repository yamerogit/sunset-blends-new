import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { CartContext } from '../../context/CartContext';
import toast from 'react-hot-toast';
// Update the import path to your correct image:
import chocoWaltz from '../../images/Pastry/ChocoWaltz.png';

const sizeOptions = [
  { label: '50G', value: 50, price: 49 },
  { label: '100G', value: 100, price: 99 }
];

const PdChocoWaltz = () => {
  const [selectedOption, setSelectedOption] = useState(sizeOptions[0]);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const item = {
      id: 'choco-waltz',
      name: 'Choco Waltz',
      price: selectedOption.price,
      size: selectedOption.label,
      image: chocoWaltz
    };
    
    addToCart(item);
    
    toast.success(`${selectedOption.label} added to cart!`, {
      duration: 2000,
      position: 'top-center',
      style: {
        background: '#218C8D',
        color: '#fff',
        fontWeight: '600',
      },
    });
    
    setTimeout(() => {
      navigate('/cart');
    }, 1000);
  };

  return (
    <div 
      className="min-h-screen w-full"
      style={{ background: "#D7BDA6" }}
    >
      <NavBar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/pastry" 
          className="inline-flex items-center mb-8 text-[#322315] hover:text-[#4a3422] transition-colors"
          style={{ marginLeft: "100px" }}
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Pastry
        </Link>
        <div className="flex gap-16 items-start" style={{ marginLeft: "120px" }}>
          {/* Product Image */}
          <div className="flex-shrink-0" style={{ marginLeft: "-20px" }}>
            <div 
              className="bg-white rounded-[30px] p-8 shadow-lg"
              style={{ 
                width: "400px", 
                height: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img 
                src={chocoWaltz}
                alt="Choco Waltz"
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
              Choco Waltz
            </h1>
            <p className="text-[#322315] text-base mb-6 leading-relaxed" style={{ maxWidth: '600px' }}>
              Elegant chocolate cookie with a delicate crunch and rich cocoa flavor, perfect for chocolate lovers.
            </p>
            
            {/* Size Selection (50G & 100G) */}
            <div className="flex items-end justify-between mb-8" style={{maxWidth: '600px'}}>
              {/* Size Selection */}
              <div>
                <h3 className="text-[#322315] font-semibold text-lg mb-3">Size</h3>
                <div className="flex gap-3">
                  {sizeOptions.map(option => (
                    <button
                      key={option.value}
                      onClick={() => setSelectedOption(option)}
                      className={`px-6 py-3 rounded-full font-medium transition-all ${
                        selectedOption.value === option.value
                          ? 'bg-[#322315] text-white'
                          : 'bg-white text-[#322315] hover:bg-[#f5f5f5]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
              {/* Price Display, right-aligned */}
              <div className="flex flex-col" style={{minWidth:'170px'}}>
                <h3 className="text-[#322315] font-semibold text-lg mb-3 text-right">Price</h3>
                <div className="flex items-center justify-end h-full text-2xl font-bold text-[#322315]">
                  ₱{selectedOption.price}
                </div>
              </div>
            </div>

            {/* Total Price */}
            <div className="mb-8 p-4 bg-white/50 rounded-lg">
              <div className="flex justify-between items-center text-lg">
                <span className="text-[#322315] font-medium">Total:</span>
                <span className="text-2xl font-bold text-[#322315]">
                  ₱{selectedOption.price}
                </span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              className="w-full bg-[#322315] text-white py-4 px-8 rounded-full text-lg font-semibold hover:bg-[#4a3422] transition-colors shadow-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdChocoWaltz;
