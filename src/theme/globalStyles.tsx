// material
import { useTheme } from '@mui/material/styles';
import { GlobalStyles as GlobalThemeStyles } from '@mui/material';

// ----------------------------------------------------------------------

export default function GlobalStyles() {
  const theme = useTheme();

  return (
    <GlobalThemeStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          MsOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        html: {
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch'
        },
        body: {
          width: '100%',
          height: '100%',
          backgroundColor: '#FFFFFF',
          maxHeight: '100vh'
        },
        '#root': {
          width: '100%',
          height: '100%',
          whiteSpace: 'pre-line'
        },
             }}
    />
  );
}
