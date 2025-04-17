// ----------------------------------------------------------------------
export default function Button(theme) {
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        boxShadow: 'none'
                    }
                },
                sizeLarge: {
                    height: 48
                },
                containedInherit: {
                    color: theme.palette.grey[800],
                    '&:hover': {
                        backgroundColor: theme.palette.grey[400]
                    }
                },
                outlinedInherit: {
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover
                    }
                },
                textInherit: {
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover
                    }
                }
            }
        }
    };
}
