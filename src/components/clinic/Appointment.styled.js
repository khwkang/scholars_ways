import styled from "react-emotion";
import t from "../../theme";

export const Container = styled("div")`
  padding: ${t.s(3)} ${t.s(1)};
  ${t.mq.l} {
    padding: ${t.s(5)} ${t.s(6)};
  }

  h4 {
    font-size: 1rem;
    color: grey;
  }
  span {
    display: block;
    margin-top: 2rem;
    color: blue;
  }
`;

export const PageTitle = styled("h1")`
  margin-bottom: 3.4rem;
`;
