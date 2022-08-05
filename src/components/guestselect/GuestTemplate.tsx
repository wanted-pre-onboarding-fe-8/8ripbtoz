import styled from 'styled-components';

const GuestSelectButtonTemplate = styled.div`
  background-color: #fff;
  border-top: 1px solid rgb(238, 238, 238);
  display: none;
  width: 100vw;
  left: 0;
  position: fixed;
`;

const GuestSelectWrapperTemplate = styled.section`
  width: 320px;
  @media screen and (max-width: 480px) {
    width: 100vw;
    ${GuestSelectButtonTemplate} {
      display: block;
    }
    li {
      padding: 6.6vw;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 767px) {
    width: 100vw;
    ${GuestSelectButtonTemplate} {
      display: block;
    }
    li {
      padding: 6vw;
      font-size: 3.8vw;
    }
    p {
      font-size: 3.8vw;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    --medium-width: 768px;
    width: var(--medium-width);
    top: 0;
    left: 0;
    margin: auto;
    ${GuestSelectButtonTemplate} {
      display: block;
      width: var(--medium-width);
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

export { GuestSelectWrapperTemplate, GuestSelectButtonTemplate, GuestButtonTemplate };
