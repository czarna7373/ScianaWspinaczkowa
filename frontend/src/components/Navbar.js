import React from 'react'

export default function Navbar({setToken}) {
const logOutHandler = () => {
  setToken("");
  localStorage.clear();
}

  return (
    <div className='navbar'>
      <h1>Twoja Ścianka Wspinaczkowa</h1>
      <button className="log-out-btn" onClick={logOutHandler}>Wyloguj</button>
    </div>
  )
}

