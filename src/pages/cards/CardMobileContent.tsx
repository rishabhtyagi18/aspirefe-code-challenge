import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import CardSwiper from './sections/CardSwiper'
import CardHeader from './sections/CardHeader'
import CardTabs from './sections/CardTabs'
import CardCtaBtn from './sections/CardCtaBtn'
import CardDetailAccordion from './sections/CardDetailAccordion'
import RecentTransactionAccordion from './sections/RecentTransactionAccordion'

function CardMobileContent() {
  return (
    <>
    <Box
      sx={{ position: 'fixed', px: 3 }}
    >
      <CardHeader />

      <CardTabs />
      <CardSwiper />
    </Box>
    <Stack  sx={{pt: '55vh'}}>
      <Box sx={{backgroundColor: 'white', zIndex: 1000, borderTopLeftRadius: '24px', borderTopRightRadius: '24px'}}>
      <CardCtaBtn />
      <Box sx={{p: 3}}>
      <CardDetailAccordion />
          <Box sx={{ mt: 3 }}><RecentTransactionAccordion /> </Box>
          <Box sx={{ bgcolor: '#EDFFF5', borderBottom: '1px solid #DDFFEC', borderLeft: '1px solid #DDFFEC', borderRight: '1px solid #DDFFEC', py: 2, cursor: 'pointer' }}>
            <Typography sx={{ color: '#01D167', fontWeight: 600, fontSize: 13, textAlign: 'center' }}>View All Transactions</Typography>
          </Box>
          
          </Box>
          </Box>
      </Stack>
    </>
  )
}

export default CardMobileContent
