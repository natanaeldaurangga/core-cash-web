import { createTheme } from "@mui/material"

export const customTheme = createTheme({
    typography: {
        fontFamily: [
            'Poppins',
            'serif'
        ].join(','),
        allVariants: {
            textTransform: 'none'
        }
    }
});


