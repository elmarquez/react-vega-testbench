import styled from 'styled-components';
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid lightgrey;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-grow: 2;
`;

const Left = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: auto;
  

  .ReactCodeMirror { 
    flex-grow: 2;
    overflow: scroll;
    position: relative;
    
    .CodeMirror {
      flex-grow: 3;
      height: 100%;
      width: 100%;
      border: none;
      position: absolute;
    }
  }

`;

const Right = styled.div`
  flex-basis: 50%;
  border-left: 1px solid lightgrey;
`;


export { Layout, Header, Body, Left, Right };