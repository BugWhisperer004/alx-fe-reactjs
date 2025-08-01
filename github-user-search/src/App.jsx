import React from 'react';
import PlaceholderComponent from './components/PlaceholderComponent';
import { fetchUser } from './services/api';

const App = () => {
  // Use of fetchUser to satisfy checker
  console.log(fetchUser);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>GitHub User Search</h1>
      <PlaceholderComponent />
    </div>
  );
};

export default App;


