import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import Carousel from './Carousel'

const PostList = () => {
  const [postagens, setPostagens] = useState([]);

  useEffect(() => {
    import('../postagens/todas_postagens.json') 
      .then((module) => setPostagens(module.default))
      .catch((err) => console.error("Erro ao carregar as postagens", err));
  }, []);

  return (
    <div style={{ paddingTop: "70px", display: "flex", justifyContent: "center" }}>
      <Row className="g-4" style={{ width: "100%", maxWidth: "1400px" }}>
      <Carousel/> 
        {postagens.map((post) => (
          <Col xs={12} sm={6} md={4} lg={3} key={post.id} className="d-flex justify-content-center">
            <Card className="h-100 shadow-lg" style={{ width: "100%", maxWidth: "280px", height: "420px", display: "flex", flexDirection: "column" }}>
              <Link to={`/postagem/${post.id}`}>
                <Card.Img 
                  variant="top" 
                  src={post.imagem} 
                  style={{ width: "100%", height: "200px", objectFit: "cover" }} 
                />
              </Link>
              <Card.Body className="text-center d-flex flex-column justify-content-between">
                <Link to={`/postagem/${post.id}`} className="stretched-link">
                  <Card.Title>{post.titulo}</Card.Title>
                </Link>
                <Card.Text>{post.descricao}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PostList;
