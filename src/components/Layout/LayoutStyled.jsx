import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: ${props => props.theme.space[0]}px auto;
  padding: ${props => props.theme.space[0]}px 16px;
`;
