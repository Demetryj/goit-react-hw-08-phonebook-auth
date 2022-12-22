import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  gap: ${props => props.theme.space[3]}px;
  padding: ${props => props.theme.space[4]}px;
`;
