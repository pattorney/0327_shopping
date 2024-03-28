import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Row, Col, Container } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ProductAll = () => {
  let {id} = useParams();
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQurey = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/pattorney/0327_shopping0327/products/?q=${searchQurey}`;
//    let url = `http://localhost:5000/products?q=${searchQurey}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  useEffect(() => {
    getProducts();
  }, [query]);

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