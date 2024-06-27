import { memo } from 'react'

import { Field } from 'react-final-form'
import { FormControl, InputAdornment, InputLabel, OutlinedInput, TextFieldPropsSizeOverrides, styled } from '@mui/material'


interface Props {
  size?: "small" | "medium",
  name: string,
  label: string,
  startIcon?: string,
  multiline?:boolean,
  rows?: number,
  type?: "number" 
}

const RegistrationInput = ({size = 'small', name, label, startIcon, multiline, rows, type}: Props) => {

    const validate = (value1: string) => {
        return value1 ? undefined : true
    }
    
  return (
    <Field
        name={name}
        validate={validate}
        render={({input, meta}) => (
            <FormControl fullWidth >
                <InputLabel htmlFor={name}>{label}</InputLabel>
                <OutlinedInput
                autoComplete='off'
                type={type}
                    id={name}
                    startAdornment={<InputAdornment position="start">{startIcon ? startIcon : ""}</InputAdornment>}
                    label={label}
                    fullWidth
                    multiline={multiline}
                    rows={rows}
                    size={size}
                    error={meta.touched && Boolean(meta.error)}
                    {...input}
                />
              </FormControl>
        
        )}/>
  )
}


export default memo(RegistrationInput)

  