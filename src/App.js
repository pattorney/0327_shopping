import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import NavBar from './component/NavBar';

// 1. 전체상품 페이지, 로그인 페이지, 상품상세 페이지
// 1-1. 네비게이션 바
// 2. 전체상품 페이지 : 전체 상품을 볼 수 있다.
// 3. 로그인 버튼 : 로그인 페이지가 나온다.
//    로그인X 인 경우 상품데테일을 눌러도 로그인 페이지 표시
// 4. 로그인O 인 경우 상품디테일 페이지를 볼 수 있다.
// 5. 로그아웃 버튼을 클릭하면 로그아웃된다.
//    로그아웃 시, 상품디테일을 볼 수 없다.
// 6. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
// 7. 상품을 검색할 수 있다.

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      
    </div>
  );
}

export default App;