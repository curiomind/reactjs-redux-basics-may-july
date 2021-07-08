import React from 'react';
import Register from './Register';
import Login from './Login';
import Layout from './Layout';

function App() {
  const RegisterWithLayout = Layout(Register);
  const LoginWithLayout = Layout(Login);
  return (
    <React.Fragment>
      <LoginWithLayout />
      <br />
      <RegisterWithLayout />
    </React.Fragment>
  );
}

export default App;
