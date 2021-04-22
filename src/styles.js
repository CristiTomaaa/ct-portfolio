import styled from 'styled-components';

export const StyledHeader = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
margin-left: 8rem;
color: black;
  @media (max-width: 1300px){
    display: block;
    padding: 5rem 2rem;
    margin-left: 0rem;
    text-align: center;
  }
`;

export const StyledDescription = styled.div`
flex: 1;
padding-right: 1.5rem;
h2{
  font-weight:lighter;
}
  @media (max-width: 1300px){
    padding: 0;
    button {
      margin: 2rem 0rem;
    }
    img {
      display: flex;
    }

  }
`;

export const SyledImage = styled.div`
flex: 1;
overflow: hidden;
img{
  width: 80%;
  height: 80%;
  object-fit: cover;
  @media (max-width: 1300px){
    padding-top: 4rem;
    max-height: 75%;
    max-width : 75%;
  }
}
`;

export const StyledHide = styled.div`
overflow: hidden;
`