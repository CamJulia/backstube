import React from 'react';
import cookies from '../cookies';
import '../App.css';

const Cookies = props => {
  const allCookies = Object.keys(cookies);
  return allCookies.map(cookie => (
    <div className={"cookieCard"} key={cookie}>
      <label>
      <input 
      type="checkbox"
      defaultChecked={false}
      className="cookieName"
      data-cookie={cookie}
      onChange={cookie => props.addCookie(cookie)}
      value={cookie.toUpperCase()}
      />{cookie.toUpperCase()}
      </label>
    </div>
  ));
};

export default Cookies;
