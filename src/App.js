import React from 'react';
import { Layout, Header, Body, Left, Right } from './style';
import Codemirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { config: 'abc' };
  }

  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Body>
          <Left>
            <Codemirror value={this.state.config} />
          </Left>
          <Right>Right</Right>
        </Body>
      </Layout>
    );
  }
}




export default App;
