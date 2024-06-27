import { Autocomplete as AC, TextField } from '@mui/material';
import React from 'react'

interface Props {
    data: any,
    value: any,
    setValue: React.Dispatch<React.SetStateAction<any>>,
    label: string,
    width?: any
}

const Autocomplete = ({data, value, setValue, label, width}: Props) => {
  return (
    <AC
        options={data ? data : []}
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);  
        }}
        renderInput={(params) => 
        <TextField
            label={label}
            sx={{width: width ? width : '300px'}}
            id="selectGoods"
            InputProps={params.InputProps}
            inputProps={{ ...params.inputProps, 'aria-label': 'autocomplete' }}
        />
        }
    />
  )
}

export default Autocomplete
