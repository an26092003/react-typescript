import React from 'react'
import Item from '../Item/Item'
import { Container, Row, Col } from 'react-bootstrap';

const ListProduct = () => {
  return (
    <Container>
      <h1 style={{marginBottom: '38px', fontSize: '24px'}}>SẢN PHẨM</h1>
      <Row xs={1} sm={2} md={3} lg={4}>
        {/* Sử dụng map để tạo các cột cho mỗi sản phẩm */}
        
          <Col >
            <Item/>
              </Col>
              <Col >
            <Item/>
              </Col>
              <Col >
            <Item/>
              </Col>
              <Col >
            <Item/>
              </Col>
              <Col >
            <Item/>
          </Col>
        
      </Row>
    </Container>
  )
}

export default ListProduct