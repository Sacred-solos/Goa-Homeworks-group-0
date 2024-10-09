import React from "react";


//კომპონენტი იჭერს ერორებს და გამოაქვს მესიჯი.
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    //ინახავს ერორებს რომლებიც შეიძლება მოხდეს
    this.state = { error: null };
  }

static getDerivedStateFromError(error) {
    // Set the 'error' state to the caught error.
    return { error };
  }
  
  // თუ არის ერორი, აჩვენებს მესიჯს გაფუჭებული კომპონენტის მაგივრად
  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>error detected</h2>
        </div>
      );
    }

    // თუ არ არის ერორი, ნორმალურად დაარენდეროს.
    return this.props.children;
  }  
}