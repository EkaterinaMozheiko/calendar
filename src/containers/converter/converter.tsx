import React, { Component, Fragment } from 'react';

import ConverterPanel from '../converter-panel/converter-panel';

import { Header } from '../../components/header';

import * as styles from './converter.module.scss';

class Converter extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className={styles.converter}>
          <ConverterPanel />
        </div>
      </Fragment>
    );
  }
}

export default Converter;
