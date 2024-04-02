import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productDetailAction } from '../redux/actions/getProductDetailAction';

const ProductDetail = () => {
  let {id} = useParams();
  const product = useSelector(state=>state.productDetail.id);
  const dispatch = useDispatch();

  const getProductDetail = () => {
    dispatch(productDetailAction.getProductDetail(id));
  }

  useEffect(()=>{
    getProductDetail()
  },[]);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt="each-product"/>
        </Col>
        <Col>
            <div>{product?.title}</div>
            <div>{product?.price}</div>
        </Col>
      </Row>  
    </Container>
  );
}

export default ProductDetail;