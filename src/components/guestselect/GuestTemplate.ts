import styled from 'styled-components';

const GuestWrapperTemplate = styled.section`
  width: 320px;
  @media screen and (max-width: 480px) {
    width: 100vw;
    h2 {
      display: block;
    }
    li {
      padding: 6.6vw;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 767px) {
    width: 100vw;
    h2 {
      display: block;
    }
    li {
      padding: 6.6vw;
      font-size: 3.8vw;
    }
    p {
      font-size: 3.8vw;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 768px;
    top: 0;
    left: 0;
    margin: auto;
    h2 {
      display: block;
      font-size: 18px;
    }
    li {
      padding: 3vw;
    }
  }
  @media screen and (min-width: 1024px) {
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 20px 0px;
  }
`;

const GuestButtonTemplate = styled.div`
  display: flex;
  margin: auto;
  @media screen and (max-width: 480px) {
    div {
      width: 13vw;
      height: 6vw;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 767px) {
    button {
      width: 6vw;
      height: 6vw;
    }
    div {
      width: 13vw;
      height: 6vw;
      font-size: 5vw;
      line-height: 6vw;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    div {
      width: 6vw;
      height: 3vw;
      font-size: 2vw;
      line-height: 3vw;
    }
  }
`;

export { GuestWrapperTemplate, GuestButtonTemplate };
