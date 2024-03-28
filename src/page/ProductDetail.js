import React, { useEffect, useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
//    let url = `https://my-json-server.typicode.com/pattorney/0327_shopping0327/products/${id}`;
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }

  useEffect(()=>{
    getProductDetail()
  },[]);

// 초이스 화면 (choice : false)
// 신상품 여부 화면 (new : true)
// 사이즈 선택 화면 (size : [ "S, "M", "L" ])
// 버튼 드롭다운 (사이즈 선택) : 부트스트랩 이용
// 추가 버튼 ("추가")

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