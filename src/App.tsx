import React from 'react';
// import NavBar from './components/NavBar.tsx';

interface WelcomeProps {
  name: string;
}

const Welcome = ({ name }: WelcomeProps) => {
  return (
    <>
      <h1>Hello {name}!</h1>
      <p>Welcome to Lendsqr</p>
    </>
  );
};

const App = () => {
  return (
    <div>
      <Welcome name="Idowu" /> 
    </div>
  );
};

export default App;
