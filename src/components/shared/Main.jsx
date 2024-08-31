import styled from 'styled-components';
import QRCodeGenerator from '../QRCodeGenarator';
import IPAddressFinder from '../IPAddressFinder';
import MovieSearchEngine from '../MovieSearchEngine';
import TodoApp from '../TodoApp';
import QuizApp from '../QuizApp';
import LanguageTranslator from '../LanguageTranslator';
import Footer from './Footer';
import CarouselMultiApp from '../CarouselMultiApp';
import { FaArrowLeft } from 'react-icons/fa';
import NavBar from './Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

// Estiliza o botão de retorno.
const ReturnButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Main = () => {
  // Cria estados para autenticação, visibilidade da barra de navegação, componente atual, e índice do carrossel.
  const [currentComponent, setCurrentComponent] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const navigate = useNavigate(); // Hook para navegação.

  // Função para simular logout e redirecionar para a página de login.
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // Função para definir o componente atual a ser exibido e atualizar o índice do carrossel.
  const handleAccess = (index, component) => {
    setCarouselIndex(index);
    setCurrentComponent(component);
  };

  // Função para retornar ao carrossel principal.
  const handleReturn = () => {
    setCurrentComponent(null);
  };

  // Função para renderizar o componente atual com base no estado.
  const renderComponent = () => {
    switch (currentComponent) {
      case "QRCodeGenerator":
        return <QRCodeGenerator />;
      case "IPAddressFinder":
        return <IPAddressFinder />;
      case "MovieSearchEngine":
        return <MovieSearchEngine />;
      case "TodoApp":
        return <TodoApp />;
      case "QuizApp":
        return <QuizApp />;
      case "LanguageTranslator":
        return <LanguageTranslator />;
      default:
        return null;
    }
  };

  // Renderiza o componente principal.
  return ( 
    <>
        <NavBar handleAccess={handleAccess} handleLogout={handleLogout}/>
        <MainContent>
            {currentComponent ? (
                <>
                    {renderComponent()}
                    <ReturnButton onClick={handleReturn}>
                        <FaArrowLeft /> Return
                    </ReturnButton>
                </>
            ) : (
              <CarouselMultiApp carouselIndex={carouselIndex} handleAccess={handleAccess}/>
            )}
            <Footer />
          </MainContent>
    </>
  );
}

export default Main;