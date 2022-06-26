import { makeStyles, Typography } from "@material-ui/core"
import { IconeChat } from "../../../tema/OniTema/Icones/Icones"
const estilos=makeStyles({
    tipografia:{
        position:'fixed',
        backgroundColor:'#ed6c02',
        width:'100%',
        bottom:'0',
        padding:'25px 0px 25px 25px',
        color:'whitesmoke',
        fontSize:'95%',
        display:'flex',
        alignItems:'center'
        },
    chat:{
            color:'whitesmoke',
            fontSize:'175%',
            marginRight:'7px'
        }
    })
export const BarraBase=()=>{
    const classes=estilos()
    return(
        <Typography className={classes.tipografia}><IconeChat className={classes.chat}/> Estamos online!</Typography>
    )
}