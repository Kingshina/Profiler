import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

var data = {
  name: 'Adesina Adelua',
  imgURL: './profile.jpg', 
  hobbyList: [
    'Playing Basketball',
    'Listening to music',
    'Driving'
  ]
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App data={data} />);
