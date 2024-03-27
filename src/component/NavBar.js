import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const menuList = ['여성', '남성', '신생아/유아', '아동', 'S&S Home', 'Sale', '지속가능성'];

  return (
    <div>
      <div className="login-button">
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
      <div className="nav-section">
        <img width="150px" alt="로고이미지" src="https://logolook.net/wp-content/uploads/2021/06/Samsung-Logo-1993.png" />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => 
          <li key={index}>{menu}</li>
          )}
        </ul>
      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" />  
      </div>      
      </div>
      
    </div>
  );
}

export default NavBar;
