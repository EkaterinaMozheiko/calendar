import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Dropdown } from '../../components/dropdown';
import { SelectOption } from '../../models';

import * as styles from './converter-panel.module.scss';

const API_KEY = 'bed51a86899052527c76';

function ConverterPanel() {
  const [currencies, setCurrencies] = useState([]);
  const [currenciesToConvert, setCurrenciesToConvert] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://free.currconv.com/api/v7/currencies?apiKey=${API_KEY}`,
      );
      setCurrencies(Object.values(result.data.results));
    };

    fetchData();
  }, []);

  function handleChangeCurrency({value, label}: SelectOption) {
    setCurrenciesToConvert({...currenciesToConvert, [value]: label});
  }

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
        <Dropdown
          placeholder="From"
          currencies={currencies}
          name="From"
          handleChangeCurrency={handleChangeCurrency}
        />
      </div>
      <div className={styles.item}>
        <Dropdown
          placeholder="To"
          currencies={currencies}
          name="To"
          handleChangeCurrency={handleChangeCurrency}
        />
      </div>
      <Button variant="contained" color="primary">
        Convert
      </Button>
    </main>
  );
}

export default ConverterPanel;
