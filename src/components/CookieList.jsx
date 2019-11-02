import React from 'react';
import cookies from '../cookies';
import '../App.css';

const Cookies = cookies.map(cookie => (
  <div
    key={cookie.name}
    onClick={() => console.log(`You chose ${cookie.name}!!!`)}
    className="cookieName">
    <p>{cookie.name.toUpperCase()}</p>
  </div>
));

export default Cookies;
