import React, { useEffect, useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/pattorney/0327_shopping0327/products/${id}`;
//    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }

  useEffect(()=>{
    getProductDetail()
  }, []);

// 초이스 화면
// 신상품 여부 화면
// 사이즈 선택 화면
// 버튼 드롭다운 (사이즈 선택 S, M, L) : 부트스트랩 이용
// 추가 버튼

  return (
    <Container>
      <Col className="product-img">
        <img src={product?.img} alt="each-product"/>
      </Col>
      <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
      </Col>
    </Container>
  );
}

export default ProductDetail;
