import React from 'react'
import './nav.css'
export default function Nav({user,setUser,fetchData}) {
  const sub = (e)=>{
    e.preventDefault();
    fetchData(user);
  }
  const ch = (e)=>{
    setUser(e.target.value);
  }
  return (
    <div className='main'>
      <div className='logo'>
      <h1>Git Finder</h1>
      </div>
      <div className='fr'>
      <form onSubmit={sub}>
      <input type='text' onChange={ch} value={user} placeholder='Search Username' />
      <button>Search</button>
      </form>
      </div>
    </div>
  )
}
