import React from 'react';
import ReactDOM from 'react-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorType: null };
  }

  static getDerivedStateFromError(error) {
    let errorType = "Unexpected Error";
    if (error.message.includes("Network")) {
      errorType = "Network Error";
    }
    return { hasError: true, errorType };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>{this.state.errorType}</h2>;
    }

    return this.props.children;
  }
}

function FaultyComponent() {
  throw new Error("This is a faulty component!");
}

function NetworkFaultyComponent() {
  throw new Error("Network request failed!");
}

function SafeComponent() {
  return <h2>This component is safe and renders fine.</h2>;
}

function App() {
  return (
    <div>
      <h1>My React App</h1>

      <ErrorBoundary>
        <SafeComponent />
      </ErrorBoundary>

      <ErrorBoundary>
        <FaultyComponent />
      </ErrorBoundary>

      <ErrorBoundary>
        <NetworkFaultyComponent />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <SafeComponent />
      </ErrorBoundary>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));