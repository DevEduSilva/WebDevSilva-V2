import React from 'react';
import './Header.css';

export function Header() {
  return (
    <header className="header-main">
      <nav className="nav-container">
        
        <div className="nav-item">
          <a href="#about">SOBRE MIM</a>
        </div>

        <div className="nav-item logo">
          <a href="#inicio">
            Web<b style={{ color: 'gray' }}>Dev</b>Silva
          </a>
        </div>

        <div className="nav-item">
          <a href="#projetos">PROJETOS</a>
        </div>
      </nav>
    </header>
  );
}