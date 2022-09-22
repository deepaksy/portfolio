import { ThemeProvider,createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useThemeSelector } from "../redux/ThemeHook"





const MuiThemeWrapper = (props:any) =>{
    const isdark=useThemeSelector(state=>state.theme.isdark);

    const darkTheme = createTheme({
        palette:{
            mode:isdark?'dark':'light',
        }
    });
    return(
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            {props.children}
        </ThemeProvider>
    )

}


export default MuiThemeWrapper