import styled from 'styled-components';

const StyledButton = styled.button`
  color: ${props =>  props.outline ? props.color : (props.textColor) ? props.textColor : "#212529"};
  background: ${props => props.outline ? "#FFF" : (props.color) ? props.color : "#FFF"};
  border: 1px solid;
  border-color: ${props => props.outline ? props.color : (props.color) ? props.color : "#FFF"};
  font-size: ${props => props.textSize ? props.textSize : "1rem"};
  margin: 0.25rem;
  padding: 0.25rem ${props => props.textSize ? props.textSize : "1rem"};
  border-radius: 3px;
  :hover {
    color: ${props => props.hoverTextColor ? props.hoverTextColor : "#212529"};
    background: ${props => props.hoverColor ? props.hoverColor : "#CCC"};
    border-color: ${props => props.hoverColor ? props.hoverColor : "#CCC"}
  };
`;

//export {Button}
export default StyledButton;