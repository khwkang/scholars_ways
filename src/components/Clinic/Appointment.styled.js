import styled from "react-emotion";
import t from "../../theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${t.mq.l} {
    flex-direction: row;
  }
`

export const Content = styled("div")`
  width: 100%;
  padding: ${t.s(3)} ${t.s(1)};
  ${t.mq.l} {
    padding: ${t.s(5)} ${t.s(6)};
    width: 50%;
  }

  h4 {
    font-size: 1rem;
    color: grey;
  }
  span {
    display: block;
    margin-top: 2rem;
    color: #e64441;
  }  
`;

export const PageTitle = styled("h1")`
  margin-bottom: ${t.s(3)};
  font-size: ${t.f(4.5)};
  ${t.mq.l} {
    font-size: ${t.f(5)};
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: ${t.s(9)};
  ${t.mq.l} {
    width: 50%;
    height: 100vh;
  }
`
