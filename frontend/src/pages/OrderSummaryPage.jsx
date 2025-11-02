import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

const OrderSummaryPage = () => {
  const { cartItems, getCartTotal, getCartCount, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    // Navigate to order placed page with order details
    navigate('/order-placed', {
      state: {
        customerName: customerInfo.name,
        customerPhone: customerInfo.phone,
        paymentMethod: paymentMethod,
        total: getCartTotal()
      }
    });
    
    clearCart();
  };

  return (
    <div style={{ backgroundColor: '#FCF6EE', minHeight: '100vh' }}>
      <NavBar />
      
      <div style={{ padding: '40px 80px' }}>
        <Link 
          to="/cart" 
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
          <span>←</span> ORDER SUMMARY
        </Link>

        <form onSubmit={handleSubmit}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '60px' 
          }}>
            {/* Left Side - Customer Information & Payment Method */}
            <div>
              {/* Customer Information */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '32px',
                marginBottom: '32px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
              }}>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '24px',
                  color: '#211511'
                }}>
                  Customer Information
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '500',
                      marginBottom: '8px',
                      color: '#211511'
                    }}>
                      Full Name *
                    </label>
                    <input 
                      type="text"
                      name="name"
                      required
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #E8DED1',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '500',
                      marginBottom: '8px',
                      color: '#211511'
                    }}>
                      Phone Number *
                    </label>
                    <input 
                      type="tel"
                      name="phone"
                      required
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #E8DED1',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
              }}>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '24px',
                  color: '#211511'
                }}>
                  Payment Method
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Cash', 'GCash'].map((method) => (
                    <label 
                      key={method}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '16px',
                        border: `2px solid ${paymentMethod === method ? '#218C8D' : '#E8DED1'}`,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        backgroundColor: paymentMethod === method ? '#E6F5F5' : 'white',
                        transition: 'all 0.2s'
                      }}
                    >
                      <input 
                        type="radio"
                        name="paymentMethod"
                        value={method}
                        checked={paymentMethod === method}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        style={{ marginRight: '12px', cursor: 'pointer' }}
                      />
                      <span style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        color: '#211511'
                      }}>
                        {method}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Order Summary */}
            <div>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '24px',
                padding: '40px 32px',
                height: 'fit-content',
                position: 'sticky',
                top: '20px'
              }}>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '24px',
                  textAlign: 'center',
                  color: '#211511',
                  borderBottom: '2px solid #211511',
                  paddingBottom: '16px'
                }}>
                  ORDER SUMMARY
                </h2>

                <div style={{ marginBottom: '24px' }}>
                  {cartItems.map((item) => (
                    <div 
                      key={item.id}
                      style={{
                        display: 'flex',
                        gap: '16px',
                        marginBottom: '20px'
                      }}
                    >
                      <img 
                        src={item.image} 
                        alt={item.name}
                        style={{
                          width: '60px',
                          height: '60px',
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <h4 style={{
                          fontSize: '16px',
                          fontWeight: '600',
                          marginBottom: '4px',
                          color: '#211511'
                        }}>
                          {item.name}
                        </h4>
                        <p style={{
                          fontSize: '14px',
                          color: '#626C7C',
                          marginBottom: '4px'
                        }}>
                          {item.size || 'Hot, 16oz'}
                        </p>
                        <p style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#211511'
                        }}>
                          Qty: {item.quantity} × ₱{item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ 
                  borderTop: '2px solid #211511', 
                  paddingTop: '16px',
                  marginTop: '24px'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '14px',
                    color: '#626C7C',
                    marginBottom: '8px'
                  }}>
                    <span>Subtotal</span>
                    <span>₱{getCartTotal()}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#211511',
                    marginTop: '12px'
                  }}>
                    <span>TOTAL</span>
                    <span>₱{getCartTotal()}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '16px',
                    backgroundColor: '#322315',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '18px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginTop: '32px'
                  }}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
