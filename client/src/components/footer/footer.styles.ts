// import styled from styled components
import styled from "styled-components";

// footer container styles
export const FooterContainer = styled.div`
  display: flex;
  background: white;
  padding: 1rem 3rem 0rem;
  flex-direction: column;

  @media screen and (max-width : 600px) {
    padding : 1rem 1rem 0rem;
  }
`;
// footer D styles
export const FooterD = styled.div`
  position : relative;
  display: flex;
  background:  #002846;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem 0.8rem 0rem 0rem;

  .img {
    position : absolute;
    left: -2rem;
    top: -5rem;

    @media screen and (max-width : 660px) {
       top: -2.5rem;
       left: -1.7rem;
    }

  }

  img {
    width : 10rem;

    @media screen and (max-width : 660px) {
      width : 6rem;
    }
  }
  .img2 { 
    position : absolute;
    bottom: 0rem;
    right: -4rem;

    @media screen and (max-width : 660px) {
      right: -2rem;
   }
  }
  @media only screen and (max-width: 768px) {
    padding: 15px;
  }

  .p {
    padding-top: 2rem;
  }
  h2 {
    font-size: 1.6rem;
    margin: auto;
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 700;
    line-height: 2rem;
    color: white;

    @media screen and (max-width : 420px) and (min-width : 390px) {
        font-size : 1.2rem;
    }
    @media screen and (max-width : 390px) {
        font-size : 1rem;
    }
  }

  button {
    margin: 2rem 0rem 0rem;
    border-radius: 0.3rem;
    border: solid 1px linear-gradient(180deg, #FFDA00 0%, #FF8300 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    background: linear-gradient(180deg, #FFDA00 0%, #FF8300 100%);
    padding: 0.5rem 0.5rem;

    span {
      font-family: "Space Grotesk";
      font-style: normal;
      font-weight: 400;
      color: white;
    }
    img {
      width: 1.6rem;
    }
  }

  p {
    margin-top: 4rem;
    padding: 1rem;
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 400;
    color: white;
  }
`;
