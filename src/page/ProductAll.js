import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Row, Col, Container } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
  let {id} = useParams();
  const productList = useSelector(state=>state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQurey = query.get("q") || "";
    console.log("쿼리값은?", searchQurey);
    dispatch(productAction.getProducts(searchQurey));
  };

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