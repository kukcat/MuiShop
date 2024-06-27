import { memo } from 'react'
import {
    InputLabel,
    Select,
    MenuItem,
    FormControl
} from '@mui/material'
import { Field } from 'react-final-form';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        }
    }
};
interface SelectItem{
    id: number,
    name: string,
}

interface Props {
    name: string,
    label: string,
    items?: SelectItem[]
}

const InputSelectCategory = ({name, label, items = []}: Props) => {

  return (
    <Field
    
        name={name}
        render={({input, meta}) => (
            <FormControl fullWidth size='small' error={meta.touched && Boolean(meta.error)}> 
                <InputLabel id={name+'_label'}>{label}</InputLabel>
                <Select
                    
                    fullWidth
                    size="small"
                    MenuProps={MenuProps}
                    labelId={name+'_label'}
                    label={label}
                    {...input}>
                    {items.map((element, index) => (
                            <MenuItem key={index} value={element.id}>{element.name}</MenuItem>
                    ))
                    }
                </Select>
            </FormControl> 
    )}/>
  )
}

export default memo(InputSelectCategory)

