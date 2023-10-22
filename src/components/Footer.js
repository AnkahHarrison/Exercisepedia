import {Box,Stack,Typography} from '@mui/material'
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box 
    mt= '80px' bgcolor ='#fff3f4'
    >
      <Stack
      gap ='40px' alignItems='center' px='40px' pt='24px'
      >
<img src={Logo} alt="logo" width={200} height = '40px' />

<Typography
variant='h6' pb='10px' mt='20px'
>
  © 2023 All Rights Reserved
</Typography >

      </Stack>

    </Box>
  )
}

export default Footer