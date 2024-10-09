import React, { Component } from 'react';

// Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error:", error, "Info:", info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }

    return this.props.children;
  }
}

// Counter Component
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increase</button>
      </div>
    );
  }
}

// Timer Component
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>Timer: {this.state.time} seconds</p>
      </div>
    );
  }
}

// Loading Viewer Component
class LoadingViewer extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  render() {
    return (
      <div>
        {this.state.loading ? <p>Loading...</p> : <p>Data Loaded</p>}
      </div>
    );
  }
}

// Input Control Component
class InputControl extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <p>Current Value: {this.state.inputValue}</p>
      </div>
    );
  }
}

// Fetch Data from API Component
class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    return (
      <div>
        <h3>Users:</h3>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// App Component to render all
class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div>
          <h1>Class Components Tasks</h1>
          <Counter />
          <Timer />
          <LoadingViewer />
          <InputControl />
          <FetchData />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;