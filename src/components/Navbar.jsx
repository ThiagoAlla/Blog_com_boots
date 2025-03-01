  import React, { useState, useEffect } from "react";
  import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
  import { Link, useLocation } from "react-router-dom";
  import About from './About'

  const MyNavbar = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(window.scrollY);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
      <>
        <Navbar
          expand="lg"
          className={`sticky-top shadow-sm ${isScrolled ? "scrolled" : ""} ${isHidden ? "navbar-hidden" : ""}`}
          style={{
            backgroundColor: isScrolled ? "rgba(18, 22, 41, 0.9)" : "transparent",
            transition: "background-color 0.3s ease, top 0.3s ease",
            position: "fixed",
            top: isHidden ? "-100px" : "0",
            width: "100%",
            zIndex: 1000,
          }}
        >
          <Container>
            <Navbar.Brand as={Link} to="/" className="text-white">
              <img 
                src="/assets/chess-computer-strategy-svgrepo-com.svg"
                alt="Chess Logo"
                width="40"
                height="40"
                className="d-inline-block align-top"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  as={Link}
                  to="/"
                  className={`text-white ${location.pathname === "/" ? "active-link" : ""}`}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/About"
                  className={`text-white ${location.pathname === "/About" ? "active-link" : ""}`}
                >
                  About
                </Nav.Link>
                <NavDropdown title="Posts" id="navbar-posts-dropdown" className="text-white">
                  <NavDropdown.Item
                    as={Link}
                    to="/postagem/1"
                    className={`text-white ${location.pathname === "/postagem/1" ? "active-link" : ""}`}
                  >
                    Magnus Carlsen
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/postagem/2"
                    className={`text-white ${location.pathname === "/postagem/2" ? "active-link" : ""}`}
                  >
                    Garry Kasparov
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/postagem/3"
                    className={`text-white ${location.pathname === "/postagem/3" ? "active-link" : ""}`}
                  >
                    Anatoly Karpov
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/postagem/4"
                    className={`text-white ${location.pathname === "/postagem/4" ? "active-link" : ""}`}
                  >
                    Bobby Fischer
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/postagem/5"
                    className={`text-white ${location.pathname === "/postagem/5" ? "active-link" : ""}`}
                  >
                    José Raúl Capablanca
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/postagem/6"
                    className={`text-white ${location.pathname === "/postagem/6" ? "active-link" : ""}`}
                  >
                    Mikhail Botvinnik
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/postagem/7"
                    className={`text-white ${location.pathname === "/postagem/7" ? "active-link" : ""}`}
                  >
                    Vladimir Kramnik
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/postagem/8"
                    className={`text-white ${location.pathname === "/postagem/8" ? "active-link" : ""}`}
                  >
                    Viswanathan Anand
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/postagem/9"
                    className={`text-white ${location.pathname === "/postagem/9" ? "active-link" : ""}`}
                  >
                    Paul Morphy
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div style={{ paddingTop: isHidden ? "100px" : "56px" }}></div>
      </>
    );
  };

  export default MyNavbar;
