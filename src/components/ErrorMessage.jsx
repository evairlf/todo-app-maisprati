import styled from 'styled-components';
import PropTypes from "prop-types";

// Componente de estilo para a mensagem de erro
const ErrorText = styled.div`
    color: red;
    margin: 5px 0 20px 0;
`;

// Recebe como props message a mensagem a ser reenderizada
const ErrorMessage = ({message}) => {
    return (
        <ErrorText>
            {message}
        </ErrorText>
    );
};

// Adiciona uma tipagem ao dado que será recebido
ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired, // Define que a props "message" vai ser do tipo string e que será obrigatório
};

export default ErrorMessage;