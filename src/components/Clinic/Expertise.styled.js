import styled from "react-emotion";
import t from "../../theme";

export const Container = styled("div")`
  padding: ${t.s(3)} ${t.s(1)};
  ${t.mq.l} {
    padding: ${t.s(5)} ${t.s(6)};
  }
`;

export const PageTitle = styled("h1")`
  margin-bottom: ${t.s(3)};
  font-size: ${t.f(4.5)};
  ${t.mq.l} {
    font-size: ${t.f(5)};
  }
`;

export const ListContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const List = styled("div")`
  width: ${t.s(9)};
  list-style: none;
  li {
    font-size: 1rem;
    line-height: 2rem;
    ${t.mq.l} {
      line-height: 3rem;
      font-size: 1.2rem;
    }
  }
  ${t.mq.l} {
    text-align: left;
  }
`;

export const SubTitle = styled("h2")`
  margin: 2rem 0 1rem 0;
`;
