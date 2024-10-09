import React from "react";
import ErrorBoundary from "./ErrorBoundary"
function App() {
  return (
    <div>
    <ErrorBoundary>
      <div>
        <h2>Section 1: No Errors</h2>
        <p>This section renders perfectly!</p>
      </div>
    </ErrorBoundary>

    <ErrorBoundary>
      <div>
        <h2>Section 2: No Errors</h2>
        <p>This section also works fine!</p>
      </div>
    </ErrorBoundary>

    <ErrorBoundary>
      <div>
        <h2>Section 3: Contains an Error</h2>
        <p>{undefinedVariable}</p>
      </div>
    </ErrorBoundary>
  </div>
  );
}

export default App;