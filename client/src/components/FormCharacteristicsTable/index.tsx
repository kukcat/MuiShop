import { IconButton, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { Dispatch, SetStateAction, memo, useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { rowElement } from '../../pages/Admin/parts/goodsChanger';

interface Props {
    chars: selectChars[],
    data: rowElement[],
    setData: Dispatch<SetStateAction<rowElement[]>>
}

interface selectChars {
    id: number,
    name_En: string,
    name_Ua: string
}

const FormCharacteristicsTable = ({chars, data, setData}: Props) => {

    const changeData = (id: number, value: string | number, type: string) => {
        setData(prevData => {
            return prevData.map(row => (
                row.id === id  
                ? {...row, [type]: value}
                : row
            ))
        })
    }

    const onRowAdd = () => {

        if (data.length >= chars.length) return

        setData(prevData => [...prevData, {id: Date.now(), characteristicId: -1, value_En: '', value_Ua: ''}])
    }

    const onRowRemove = (id: number) => {
        setData(prevData => prevData.filter(element => element.id !== id))
    }
     
    return (
    <TableContainer component={Paper}>
        <Table>
        <TableHead>
            <TableRow>
            <TableCell>
                Характеристика
            </TableCell>
            <TableCell>
                Англійська
            </TableCell>
            <TableCell>
                Українська
            </TableCell>
            <TableCell>
                <IconButton onClick={onRowAdd}>
                    <AddIcon/>
                </IconButton>
            </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {data.map(element=>(
                <TableRow key={element.id}>
                <TableCell>
                    <Select size='small' value={element.characteristicId} onChange={(e)=>changeData(element.id, e.target.value, 'characteristicId')}>
                        <MenuItem value={-1} disabled></MenuItem>
                        {chars.map(element => (
                            
                            <MenuItem 
                                key={element.id} 
                                value={element.id}
                                disabled={data.some(dataElement => dataElement.characteristicId === element.id) }
                            >
                                {element.name_En}
                            </MenuItem>
                        
                        ))}
                    </Select>
                </TableCell>
                <TableCell>
                    <TextField size='small' onChange={(e)=>changeData(element.id, e.target.value, 'value_En')} value={element.value_En}></TextField>
                </TableCell>
                <TableCell>
                    <TextField size='small' onChange={(e)=>changeData(element.id, e.target.value, 'value_Ua')} value={element.value_Ua}></TextField>
                </TableCell>
                <TableCell>
                    <IconButton onClick={()=>onRowRemove(element.id)}>
                        <RemoveIcon/>
                    </IconButton>
                </TableCell>
                </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    )
}

export default memo(FormCharacteristicsTable)