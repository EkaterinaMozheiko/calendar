import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';

import * as styles from './converter-panel.module.scss';


class ConverterPanel extends Component {
  render() {
    return (
      <main className={styles.panelContent}>
        <TextField
          label="Amount"
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" color="primary">
          Convert
        </Button>
      </main>
    );
  }
}

export default ConverterPanel;
