import { makeStyles } from "@material-ui/core"
const estilos=makeStyles({
    btn:{
        marginTop:'20px',
        zIndex:'20'
    },
    textoTopo:{
        color:'black'
    }
})
function TextoTopo(){
    const classes=estilos()
    return(
        <>
            <div  className={classes.textoTopo}>
                <h1>Pensando em <br/> iniciar uma <br/>  Fintech?</h1>
                <p>Forneça cartões para seus funcionários</p>
                <p>e clientes. Gerencie sua folha de pagamento</p>
                <p>em seu BANCO PRÓPRIO.</p>
            </div>
                <button className={classes.btn}>Contactar</button>
            <div>
            </div>
        </>
    )
}
export default TextoTopo