import styled from "react-emotion";
import t from "../../theme";


export const Container = styled.div`
`

export const Content = styled.div`
  width: 100%;
  padding-right: 0;
  ${t.mq.l} {    
    padding-left: ${t.s(8.5)};    
  }
`;

export const LibraryContent = styled.div`
  width: 100%;
  padding-right: 0;
  
  ${t.mq.l} {    
    padding-left: ${t.s(9)};
    width: auto%;    
  }  
`;
