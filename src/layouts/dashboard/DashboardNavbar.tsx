import { Stack, Box } from '@mui/material';

function DashboardNavbar() {
  return (
   <Stack direction="row-reverse" sx={{height: 30, width: '100vw', px: 3, mt: 1, position: 'relative'}} justifyContent="flex-end" alignItems="end">
    <Box component="img" src="/icons/aspire-selected.svg" sx={{position: 'fixed', right: '16px'}} />
   </Stack>
  )
}

export default DashboardNavbar
