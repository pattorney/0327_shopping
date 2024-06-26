import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const menuList = ['여성', '남성', '신생아/유아', '아동', 'S&S Home', 'Sale', '지속가능성'];

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`)
    }    
  };

  return (
    <div>
      <div className="login-button" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
      <div className="nav-section">
        <img width="150px" alt="로고" src="https://logolook.net/wp-content/uploads/2021/06/Samsung-Logo-1993.png" />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => 
          <li key={index}>{menu}</li>
          )}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyDown={(event)=>search(event)} className="search-iput" placeholder="검색" />  
        </div>      
      </div>
      
    </div>
  );
}

export default NavBar;
