import React, { Component } from 'react';

import * as styles from './App.module.scss';

export interface AppProps {
  testMessage: string;
}

class App extends Component<AppProps> {
  render() {
    return (
      <div className={styles.app}>
        {this.props.testMessage}
      </div>
    );
  }
}

export default App;
