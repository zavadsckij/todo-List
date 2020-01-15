import React from "react";
import {NavLink} from 'react-router-dom';

export const Header = () => {
  return (
    <div className="card bg-dark">
      <div className="card-body">
        <h1 style={{textAlign: 'center'}}>TodoList</h1>
        <ul className="nav justify-content-center">
          <li className="nav-item">
          <NavLink className="nav-link" to='home'><button className = 'btn btn-lg btn-info'>Home</button></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='about'><button className = 'btn btn-lg btn-info'>About</button></NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
