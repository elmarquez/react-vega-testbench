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
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-grow: 2;
`;

const Left = styled.div`
  flex-basis: 50%;
`;
const Right = styled.div`
  flex-basis: 50%;
`;

export { Layout, Header, Body, Left, Right };