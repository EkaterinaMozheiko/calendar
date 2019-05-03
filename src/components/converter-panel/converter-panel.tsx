import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';

import { Dropdown } from '../dropdown';

import * as styles from './converter-panel.module.scss';


class ConverterPanel extends Component {
  render() {
    return (
      <main className={styles.panelContent}>
        <div className={styles.item}>
          <TextField
            label="Amount"
            margin="none"
            variant="outlined"
          />
        </div>
        <div className={styles.item}>
          <Dropdown placeholder="From"/>
        </div>
        <div className={styles.item}>
          <Dropdown placeholder="To"/>
        </div>
        <Button variant="contained" color="primary">
          Convert
        </Button>
      </main>
    );
  }
}

export default ConverterPanel;
