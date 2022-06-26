import MenuTopo from "./MenuTopo";
import mulherTablet from './card-moca.jpg'
import { BarraBase } from "./BarraBase";
function Apresentacao(){
    return(
        <div>
            <img src={mulherTablet} alt=""/>
            <MenuTopo/>
            <BarraBase/>
        </div>
    )
}
export default Apresentacao