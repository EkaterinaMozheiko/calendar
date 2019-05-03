import React, { Component } from 'react';

import ConverterPanel from '../../components/converter-panel/converter-panel';

import * as styles from './converter.module.scss';

class Converter extends Component {
  render() {
    return (
      <div className={styles.converter}>
        <ConverterPanel/>
      </div>
    );
  }
}

export default Converter;
