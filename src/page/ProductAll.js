import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Row, Col, Container } from 'react-bootstrap';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = "https://my-json-server.typicode.com/pattorney/0327_shopping0327/products";
//    let url = "http://localhost:5000/products";
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item, index)=>(
            <Col lg={3} key={index}>
              <ProductCard item={item}/>
            </Col>
          ))}
        </Row>
      </Container>    
    </div>
  );
}

export default ProductAll;