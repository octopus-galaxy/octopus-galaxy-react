import styled from "styled-components";
import { Logo } from "../../../theme/Logo";

export const GameLayout = styled.div`
  background-color: ${(p) => p.theme.lightRed};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4%;
  padding: 3% 6%;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 1% 1%;
  }
`;

export const GameSidebar = styled.aside`
  display: grid;
  grid-column: 1;
  grid-row: 1;
`;
export const DirectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center:
    justify-content: center;
  }
`;

export const DirectionIcon = styled.img`
  background-image: cover center;
  width: 60%;
  padding: 3%;

  @media screen and (max-width: 500px) {
    width: 40%;
    padding-left: 20px;
  }
`;

export const DirectionsH = styled(Logo)`
  font-size: 4rem;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${(p) => p.theme.midOcean};
  text-decoration: overline;
  text-decoration-style: wavy;
  text-decoration-color: ${(p) => p.theme.midRed};

  @media screen and (max-width: 500px) {
    font-size: 3rem;
  }
`;

export const DirectionsP = styled.p`
  font-size: 2.4rem;
  line-height: 3.5rem;
  color: ${(p) => p.theme.midInk};
  background-color: white;
  padding: 5%;
  border-radius: 20px;

  @media screen and (max-width: 500px) {
    font-size: 1.8rem;
    line-height: 2.6rem;
  }
`;
export const GameWrapper = styled.div`
  display: grid;
  grid-column: 2 / span 2;
  background-color: white;
  padding: 4%;
  border-radius: 20px;
  max-width: 650px;
`;

export const TurnWrapper = styled.div`
  display: flex;
  padding: 2%;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 4rem;
    color: ${(p) => p.theme.midOcean};
  }
  h3 {
    font-size: 2rem;
    font-weight: 400;
    background-color: white;
    padding: 1% 2%;
    border-radius: 8px;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

export const Directions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10% 12%;
`;

// export const Match = styled.div`
//   height: 100px;
//   padding: 20px;
//   font-size: 20px;
//   background-image: ${({ img }) => `url(${img});`};
//   background-position: center;
//   background-size: cover;
//   border-radius: 7px;
//   margin-top: 5px;
//   transition-property: box-shadow margin-top filter;
//   transition-duration: 0.1s;
//   box-shadow: 0px 0px 2px 0px grey;
//   &:hover {
//     cursor: pointer;
//     margin: 0px 0px 5px;
//     box-shadow: 0px 0px 10px 0px grey;
//   }
// `;
