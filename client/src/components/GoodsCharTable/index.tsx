import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useEasyTranslation } from '../../hooks/useEasyTranslate'


interface Props {
    chars?: {
        value: string,
        name: string,
    }[]
}

const GoodsCharTable = ({chars}: Props) => {

    const {t} = useEasyTranslation("Goods")
    if (!chars?.length) return <></>

  return (
    <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell >{t("mainCharacteristics")}</TableCell>
                    <TableCell ></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {chars?.map((char, index)=>(
                    <TableRow key={index}>
                        <TableCell >{char.name}</TableCell>
                        <TableCell >{char.value}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default GoodsCharTable