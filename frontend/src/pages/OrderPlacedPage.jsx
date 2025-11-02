import { useLocation, useNavigate } from 'react-router-dom';

const OrderPlacedPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { customerName, customerPhone, paymentMethod, total } = location.state || {};

  // If no order data, redirect to home
  if (!location.state) {
    navigate('/');
    return null;
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#E8DED1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px'
    }}>
      {/* Logo */}
      <h1 style={{
        fontSize: '48px',
        fontWeight: '700',
        fontFamily: 'serif',
        color: '#211511',
        marginBottom: '60px'
      }}>
        sunset blends
      </h1>

      {/* Success Card */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '24px',
        padding: '60px 80px',
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
      }}>
        {/* Checkmark Icon */}
        <div style={{
          width: '80px',
          height: '80px',
          margin: '0 auto 32px',
          backgroundColor: '#A0826D',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <svg 
            width="50" 
            height="50" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        {/* Title */}
        <h2 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#211511',
          marginBottom: '16px'
        }}>
          Order Placed Successfully!
        </h2>

        {/* Description */}
        <p style={{
          fontSize: '16px',
          color: '#626C7C',
          marginBottom: '32px',
          lineHeight: '1.6'
        }}>
          Thank you for your order! We've successfully received your payment, and{' '}
          <strong>your coffee and pastry are being prepared</strong> with care.
        </p>

        {/* Customer Info */}
        <div style={{
          backgroundColor: '#FCF6EE',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '24px',
          textAlign: 'left'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '12px'
          }}>
            <span style={{ fontSize: '14px', color: '#626C7C' }}>Customer Name:</span>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#211511' }}>{customerName}</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '12px'
          }}>
            <span style={{ fontSize: '14px', color: '#626C7C' }}>Phone Number:</span>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#211511' }}>{customerPhone}</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '12px',
            borderTop: '1px solid #E8DED1'
          }}>
            <span style={{ fontSize: '14px', color: '#626C7C' }}>Payment Method:</span>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#211511' }}>
              {paymentMethod} (₱{total})
            </span>
          </div>
        </div>

        {/* GCash Message */}
        {paymentMethod === 'GCash' && (
          <div style={{
            backgroundColor: '#E6F5F5',
            border: '2px solid #218C8D',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '32px',
            textAlign: 'left'
          }}>
            <p style={{
              fontSize: '14px',
              color: '#211511',
              margin: 0,
              lineHeight: '1.6'
            }}>
              <strong>💳 GCash Payment:</strong> Please proceed to the counter and pay the corresponding amount of <strong>₱{total}</strong> via GCash to complete your order.
            </p>
          </div>
        )}

        {/* Proceed to Home Button */}
        <button
          onClick={() => navigate('/')}
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
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#4a3422'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#322315'}
        >
          Proceed to Home
        </button>
      </div>
    </div>
  );
};

export default OrderPlacedPage;
