import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import LogoutButton from './components/LogoutButton';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">React App</h1>
      </header>
      <main className="app-main">
        {isAuthenticated ? (
          <div className="welcome-container">
            <p className="welcome-message">Welcome, <span className="user-name">{user.fullName}</span>!</p>
            <LogoutButton />
          </div>
        ) : (
          <LoginForm />
        )}
      </main>
    </div>
  );
}

export default App;