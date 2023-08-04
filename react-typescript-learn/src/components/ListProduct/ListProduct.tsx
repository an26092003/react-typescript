import React from 'react'
import Item from '../Item/Item'
import { Container, Row, Col } from 'react-bootstrap';
import { useGetProductsQuery } from '../../api/product';

const ListProduct = () => {
  const {data: products, isLoading, isError} = useGetProductsQuery()
  
  return (
    <Container>
      <h1 style={{marginBottom: '38px', fontSize: '24px'}}>SẢN PHẨM</h1>
      <Row xs={1} sm={2} md={3} lg={4}>
        {
          products?.map((product) => (<Col >
            <Item product={product} />
          </Col>))
          
        }
          
           
        
      </Row>
    </Container>
  )
}

export default ListProduct