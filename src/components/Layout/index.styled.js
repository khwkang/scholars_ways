import styled from "react-emotion";
import t from "../../theme";

export const Container = styled.div`
  height: -webkit-fill-available; 
  margin-bottom: 10px;  
`;

export const Content = styled.div`
  width: 100%;
  padding-right: 0;
  ${t.mq.l} {    
    margin-left: ${t.s(8.5)};    
  }
`;

export const LibraryContent = styled.div`
  width: 100%;
  padding-right: 0;
  ${t.mq.l} {    
    margin-left: ${t.s(9.5)};
    width: 70%;    
  }
`;
