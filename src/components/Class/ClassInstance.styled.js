import styled from "react-emotion";
import t from "../../theme";

export const Container = styled.div`
  padding: ${t.s(3)} ${t.s(1)};
  ${t.mq.l} {
    padding: ${t.s(5)} ${t.s(6)};
  }
  div {
    h3 {
      font-family: ${t.ff.sans};
      font-size: ${t.f(2.5)};
      margin: ${t.s(2)} 0 ${t.s(0)} 0;
      color: ${t.c.darkgrey1};      
    }
    ul {
      li {
        padding: 5px 0;
        margin-left: -${t.s(0)};
      }
    }
  }
`;

export const PageTitle = styled("h1")`
  margin-bottom: 1.4rem;
`;

export const Schedule = styled("div")`
  h2 {
    margin-top: 30px;
  }
`;
