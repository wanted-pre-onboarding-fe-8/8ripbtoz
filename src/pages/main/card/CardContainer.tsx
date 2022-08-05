import styled from 'styled-components';

const GridCard = styled.div`
  max-width: 650px;
  width: 100%;
  display: grid;
  align-items: center;
  box-shadow: #e4e4e4 2px 2px 4px 2px;
  border-radius: 5px;
  aspect-ratio: 3 / 1;
  padding: 0 10px;
  column-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    'image title title '
    'image .  button';
  @media screen and (max-width: 480px) {
    aspect-ratio: 9 / 4;
  }
`;

const CardContainer = styled.div`
  max-width: 976px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 10px;
  place-items: center center;
  @media screen and (max-width: 976px) {
    grid-template-columns: 1fr;
  }
`;

export { GridCard, CardContainer };
