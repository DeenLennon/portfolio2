import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './styles/App.css'

// Error Boundary for graceful error handling
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
          color: '#f5f5f5',
          fontFamily: 'system-ui, sans-serif',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Something went wrong
          </h1>
          <p style={{ color: '#a1a1aa', marginBottom: '2rem' }}>
            Please refresh the page or try again later.
          </p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '0.75rem 2rem',
              background: 'linear-gradient(135deg, #d88898, #c07080)',
              border: 'none',
              borderRadius: '10px',
              color: '#0a0a0a',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
