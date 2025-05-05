import React from 'react';
import Profile from './components/Profile';
import HobbiesList from './components/HobbiesList';

function App({ data }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <Profile name={data.name} imgURL={data.imgURL} />
      <HobbiesList hobbies={data.hobbyList} />
    </div>
  );
}

export default App;
