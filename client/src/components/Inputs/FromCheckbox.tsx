import { memo } from 'react'
import {
    FormControl,
    Checkbox
} from '@mui/material'
import { Field } from 'react-final-form';

interface Props {
    name: string,
}

const FromCheckbox = ({name}: Props) => {

  return (
    <Field
        type='checkbox'
        name={name}
        render={({input, meta}) => (
                <Checkbox
                    {...input}/>
    )}/>
  )
}

export default memo(FromCheckbox)

