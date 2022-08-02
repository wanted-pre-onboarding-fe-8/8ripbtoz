import styled from 'styled-components';
import { Card } from '@mui/material';

const GridCard = styled(Card)`
  max-width: 650px;
  width: 100%;
  display: grid;
  align-items: center;
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

export default GridCard;
