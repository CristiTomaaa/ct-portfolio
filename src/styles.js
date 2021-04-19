import styled from 'styled-components';
export const StyledHeader = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
margin-left: 8rem;
color: black;
`;

export const StyledDescription = styled.div`
flex: 1;
padding-right: 1.5rem;
h2{
  font-weight:lighter;
}
`;

export const SyledImage = styled.div`
flex: 1;
overflow: hidden;
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;

export const StyledHide = styled.div`
overflow: hidden;
`