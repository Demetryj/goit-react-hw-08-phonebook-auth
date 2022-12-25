import styled from 'styled-components';
import avatar from 'images/world-1302935_1280.jpg';

export const Container = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: ${props => props.theme.space[0]}px auto;
  /* padding: ${props => props.theme.space[0]}px 16px; */

  background-image: linear-gradient(
      to right,
      rgba(163, 169, 216, 0.4),
      rgba(122, 125, 153, 0.4)
    ),
    url(${avatar});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
