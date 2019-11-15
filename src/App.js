import React from 'react';
import { Layout, Header, Body, Left, Right } from './style';
import Codemirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import { Vega } from 'react-vega';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { config: "", spec: {} };
    this.updateCode = this.updateCode.bind(this);
  }

  updateCode(newCode) {
    this.setState({ config: newCode, spec: JSON.parse(newCode) });
  }

  render() {
    const options = { lineNumbers: true };

    function handleHover(...args) {
      console.log(args);
    };

    const signalListeners = { hover: handleHover };

    return (
      <Layout>
        <Header>Vega Test Bench</Header>
        <Body>
          <Left>
            <Codemirror value={this.state.config} onChange={this.updateCode} onScroll={this.updateCode} options={options} />
            {/* <Codemirror value={this.state.config} onBeforeChange={this.onBeforeChange} onChange={this.updateCode} options={options} /> */}
          </Left>
          <Right>
            <Vega spec={this.state.spec} signalListeners={signalListeners} />
          </Right>
        </Body>
      </Layout>
    );
  }
}




export default App;
