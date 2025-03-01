import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import CommentForm from '../components/CommentForm';
import Footer from './Footer';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    import('../postagens/todas_postagens.json')
      .then((module) => {
        const postagem = module.default.find((p) => p.id === parseInt(id));
        setPost(postagem);
      })
      .catch((err) => console.error("Erro ao carregar a postagem", err));
  }, [id]);

  if (!post) return <div>Carregando...</div>;

  return (
    <Container style={{ paddingTop: "70px" }}>
      <Card className="text-white bg-#121629">
        <Card.Img 
          variant="top" 
          className="img-fluid w-50 mx-auto" 
          src={post.imagem} 
          style={{ marginTop: "20px", borderRadius: "8px" }}
        />
        <Card.Body>
          <Card.Title className="text-center">{post.titulo}</Card.Title>
          <Card.Text>{post.descricao}</Card.Text>
          {post.conteudo.map((paragrafo, index) => (
            <p key={index}>{paragrafo}</p>
          ))}

          {post.Wikipedia && (
            <div className="text-center mt-3">
              <Button 
                variant="primary" 
                href={post.Wikipedia} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ver na Wikipedia
              </Button>
            </div>
          )}
          
          <CommentForm />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PostDetail;
