import styled from 'styled-components';

const StyledSquare = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${({ $color }) => ($color ? 'red' : 'green')};
  // Si $color es true, el cuadrado será rojo, y si es false, será verde.
`;

export { StyledSquare };
