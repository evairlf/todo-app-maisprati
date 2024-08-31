import { useState } from 'react';
import { FaBars, FaGlobeAmericas, FaNetworkWired, FaQrcode, FaRegQuestionCircle, FaSearch, FaTasks } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from "prop-types";

const NavBarContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen'
})`
  width: 240px;
  background-color: #2c3e50;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 3px 0 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

// Estiliza o botão de alternância da barra de navegação.
const NavBarToggle = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Estiliza os links na barra de navegação.
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #34495e;
    color: #ecf0f1;
  }
`;

const NavBar = ({ handleAccess, handleLogout }) => {
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);

    const toggleNavBar = () => {
        setIsNavBarOpen(!isNavBarOpen);
      };

    return(
        <>
            <NavBarToggle onClick={toggleNavBar}>
                <FaBars size={24} color={isNavBarOpen ? "#FFF" : "#2C3E50"}/>
            </NavBarToggle>
            <NavBarContainer isOpen={isNavBarOpen}>
                <StyledLink onClick={() => handleAccess(0, "QRCodeGenerator")}>
                    <FaQrcode />
                    QR Code Generator
                </StyledLink>
                <StyledLink onClick={() => handleAccess(1, "IPAddressFinder")}>
                    <FaNetworkWired />
                    IP Address Finder
                </StyledLink>
                <StyledLink onClick={() => handleAccess(2, "MovieSearchEngine")}>
                    <FaSearch />
                    Movie Search
                </StyledLink>
                <StyledLink onClick={() => handleAccess(3, "TodoApp")}>
                    <FaTasks />
                    Todo App
                </StyledLink>
                <StyledLink onClick={() => handleAccess(4, "QuizApp")}>
                    <FaRegQuestionCircle />
                    Quiz App
                </StyledLink>
                <StyledLink onClick={() => handleAccess(5, "LanguageTranslator")}>
                    <FaGlobeAmericas />
                    Translator
                </StyledLink>
                <button
                    onClick={handleLogout}
                    style={{
                        marginTop: "20px",
                        color: "white",
                        backgroundColor: "transparent",
                        border: "none",
                    }}
                >Logout</button>
          </NavBarContainer>
        </>
    )
}

NavBar.propTypes = {
    handleAccess: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired
}

export default NavBar;