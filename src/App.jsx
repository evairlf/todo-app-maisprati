// Importa hooks e componentes do React e bibliotecas externas.
import { useEffect } from "react";
import { Route, Routes, useNavigate} from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { decodification } from "./utils/mockJwt";
import Main from "./components/shared/Main";
import Login from "./components/Login";

// Estiliza o contêiner principal do aplicativo.
const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
  justify-content: center;
`;

// Define o componente principal do aplicativo.
const App = () => {
  const navigate = useNavigate(); // Hook para navegação.

  useEffect(() => {
    const token = localStorage.getItem("token"); // pega o token do localStorage

    if(!token){ // Verifica se não existe token
      navigate("/");
    }else{
      const decoded_token = decodification(token); // Decodifica o token
      if(decoded_token === undefined){ // Se o decoded_token for undefined significa que ele já expirou
        localStorage.removeItem("token"); // Remove o token do localStorage
        navigate("/");
      }
    }
  }, [navigate]);

  // Renderiza o componente principal.
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/main" element={localStorage.getItem("token") ? <Main/> : <Login />} />
      </Routes>
    </AppContainer>
  );
};

// Exporta o componente App para ser utilizado em outras partes da aplicação.
export default App;
