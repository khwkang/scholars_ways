import styled from "react-emotion";
import t from "../../theme";

export const Container = styled("div")`
  padding: ${t.s(3)} ${t.s(1)};
  ${t.mq.l} {
    padding: ${t.s(5)} ${t.s(6)} ${t.s(1)} ${t.s(6)};
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
  height: 60vh;
`
