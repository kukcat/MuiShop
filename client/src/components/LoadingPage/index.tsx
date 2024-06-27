import { Box, CircularProgress, styled } from '@mui/material'


const ProgressBox = styled(Box)(({theme})=>({
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: theme.zIndex.modal
}))

const LoadingPage = () => {
  return (
    // <ProgressBox>
    //      <CircularProgress sx={{
    //         position: 'absolute',
    //         top: 'calc(50% - 20px)',
    //         left: 'calc(50% - 20px)'
    //      }}/>
    // </ProgressBox>
    <></>
  )
}

export default LoadingPage
