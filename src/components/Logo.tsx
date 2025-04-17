import { Box, SxProps } from '@mui/material';

export default function Logo({ sx }: {sx: SxProps }) {
  return (
    <Box
      component="img"
      src="/logo.svg"
      sx={{ height: 'auto', ...sx }}
    />
  );
}
