import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

const CartPage = () => {
  const { cartItems, updateQuantity, getCartTotal, getCartCount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (itemId, newQuantity) => {
    // Remove item if quantity reaches 0 or below
    if (newQuantity <= 0) {
      updateQuantity(itemId, 0);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleRemoveItem = (itemId) => {
    updateQuantity(itemId, 0);
  };

  return (
    <div style={{ backgroundColor: '#F3E9DC', minHeight: '100vh' }}>
      <NavBar />
      
      <div style={{ padding: '40px 80px' }}>
        {/* Back Button */}
        <Link 
          to="/" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            color: '#211511',
            fontSize: '18px',
            fontWeight: '500',
            textDecoration: 'none',
            marginBottom: '32px'
          }}
        >
          <span>←</span> CART
        </Link>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 2fr', 
          gap: '60px',
          alignItems: 'start'
        }}>
          {/* Left Side - Your Items Summary (Fixed Position) */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '40px 32px',
            height: 'fit-content',
            position: 'sticky',
            top: '20px'
          }}>
            <h2 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '24px',
              textAlign: 'center',
              color: '#211511',
              borderBottom: '2px solid #211511',
              paddingBottom: '16px'
            }}>
              YOUR ITEMS
            </h2>

            {cartItems.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#626C7C' }}>No items in cart</p>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div 
                    key={item.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '16px',
                      fontSize: '16px',
                      color: '#211511'
                    }}
                  >
                    <span style={{ fontWeight: '500' }}>{item.name.toUpperCase()}</span>
                    <span style={{ fontWeight: '600' }}>{item.price * item.quantity} PHP</span>
                  </div>
                ))}

                <div style={{ 
                  borderTop: '2px solid #211511', 
                  marginTop: '32px', 
                  paddingTop: '16px' 
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '14px',
                    color: '#626C7C',
                    marginBottom: '8px'
                  }}>
                    <span>SUBTOTAL</span>
                    <span>{getCartTotal()} PHP</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#211511'
                  }}>
                    <span>TOTAL</span>
                    <span>{getCartTotal()} PHP</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right Side - Cart Items Container */}
          <div>
            <h2 style={{
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '24px',
              color: '#211511'
            }}>
              CART <span style={{ 
                fontSize: '16px', 
                fontWeight: '400',
                marginLeft: '16px' 
              }}>
                {getCartCount()} item(s)
              </span>
            </h2>

            {cartItems.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '60px 0',
                color: '#626C7C'
              }}>
                <p style={{ fontSize: '18px', marginBottom: '16px' }}>Your cart is empty</p>
                <Link 
                  to="/coffee" 
                  style={{
                    color: '#218C8D',
                    textDecoration: 'underline'
                  }}
                >
                  Continue shopping
                </Link>
              </div>
            ) : (
              <>
                {/* Scrollable Cart Items */}
                <div style={{
                  maxHeight: '500px', // Edit this value to change the height
                  overflowY: 'auto',
                  paddingRight: '8px',
                  marginBottom: '24px'
                }}>
                  {cartItems.map((item) => (
                    <div 
                      key={item.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '24px',
                        marginBottom: '32px',
                        backgroundColor: 'white',
                        padding: '24px',
                        borderRadius: '16px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                      }}
                    >
                      <img 
                        src={item.image} 
                        alt={item.name}
                        style={{
                          width: '100px',
                          height: '100px',
                          objectFit: 'cover',
                          borderRadius: '12px'
                        }}
                      />

                      <div style={{ flex: 1 }}>
                        <h3 style={{
                          fontSize: '18px',
                          fontWeight: '600',
                          marginBottom: '4px',
                          color: '#211511'
                        }}>
                          {item.name}
                        </h3>
                        <p style={{
                          fontSize: '14px',
                          color: '#626C7C',
                          marginBottom: '8px'
                        }}>
                          {item.size || 'Hot, 16oz'}
                        </p>
                        <p style={{
                          fontSize: '16px',
                          fontWeight: '600',
                          color: '#211511'
                        }}>
                          ₱{item.price}
                        </p>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px'
                      }}>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            border: '2px solid #E8DED1',
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            fontSize: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#211511'
                          }}
                        >
                          −
                        </button>
                        
                        <span style={{
                          fontSize: '16px',
                          fontWeight: '600',
                          minWidth: '24px',
                          textAlign: 'center'
                        }}>
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            border: '2px solid #E8DED1',
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            fontSize: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#211511'
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Review Payment Button - Outside the scrollable area */}
                <button
                  onClick={() => navigate('/order-summary')}
                  style={{
                    width: '100%',
                    padding: '16px',
                    backgroundColor: '#322315',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '18px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Review Payment
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
