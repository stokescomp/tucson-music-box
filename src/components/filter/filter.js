import { CheckBox } from '@mui/icons-material';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';

import styles from './styles.module.css';

function Filter() {
  return (
    <div className={styles.filter}>
      <h4>Categories</h4>

      <FormGroup>
        <FormControlLabel
          control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }} />}
          label='Gems and Min'
        />
        <FormControlLabel
          control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }} />}
          label='Fossils & Spec'
        />
        <FormControlLabel
          control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }} />}
          label='Lamps & Tress'
        />
        <FormControlLabel
          control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }} />}
          label='Keepsake Boxes'
        />
        <FormControlLabel
          control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }} />}
          label='Accessories'
        />
        <FormControlLabel
          control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }} />}
          label='Miscellaneous'
        />
      </FormGroup>
    </div>
  );
}

export default Filter;
