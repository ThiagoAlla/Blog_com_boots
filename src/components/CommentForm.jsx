import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";

const CommentForm = () => {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === "" || name.trim() === "" || email.trim() === "") {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    const templateParams = {
      message: comment,
      user_email: email, 
      from_name: name,
    };

    console.log("Enviando email com os seguintes parâmetros:", templateParams);

    emailjs
      .send(
        "service_5esgvj7", // ID do serviço correto
        "template_fi4iram", // ID do template correto
        templateParams,
        "szX6gi5ARKzBYNLZ0" // Chave pública
      )
      .then(
        (response) => {
          console.log("Email enviado com sucesso!", response.status, response.text);
          setShowAlert(true);
          setErrorMessage("");
          setTimeout(() => setShowAlert(false), 3000);
        }
      )
      .catch((error) => {
        console.error("Erro ao enviar email:", error);
        setErrorMessage("Erro ao enviar o comentário. Tente novamente mais tarde.");
      });

    setComment("");
    setName("");
    setEmail("");
  };

  return (
    <div className="mt-4">
      {showAlert && (
        <Alert variant="success" className="alert-dismissible fade show">
          Comentário enviado com sucesso!
        </Alert>
      )}

      {errorMessage && (
        <Alert variant="danger" className="alert-dismissible fade show">
          {errorMessage}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              backgroundColor: '#0f0e17', 
              color: '#ff', 
              borderColor: '#3da9fc'
            }}
          />
        </Form.Group>

        <Form.Group controlId="email" className="mb-3">
          <Form.Control
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              backgroundColor: '#0f0e17', 
              color: '#bbb', 
              borderColor: '#3da9fc'
            }}
          />
        </Form.Group>

        <Form.Group controlId="comment" className="mb-3">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Deixe seu comentário..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{
              backgroundColor: '#0f0e17', 
              color: '#bbb', 
              borderColor: '#3da9fc'
            }}
          />
        </Form.Group>

        <Button type="submit" variant="warning" className="mt-2">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default CommentForm;
