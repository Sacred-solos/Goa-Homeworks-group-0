import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import UserList from './userList';
import ErrorFallback from './errorFallback';

const App = () => {
  const handleError = (error, info) => {
    console.error('Logging error:', error, 'Error info:', info);
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={handleError}
    >
      <UserList />
    </ErrorBoundary>
  );
};

export default App;