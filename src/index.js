import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const data = {
  name: 'Adesina Adelua',
  imgURL: './profile.jpg', 
  hobbyList: [
    'Reading Tech Blogs',
    'Coding Side Projects',
    'Eating Free Food'
  ]
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App data={data} />);
