import './lateralEsquerda.css'
import Formulario from "./formulario";
import LateralEsquerda from "./lateralEsquerda";
function Autenticacao(){
    return(
        <>
        <section className="section-autenticacao">
            <LateralEsquerda/>
            <Formulario/>
        </section>
        </>
    )
}
export default Autenticacao