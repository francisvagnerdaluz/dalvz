import Logo from "./logo";
import TextoTopo from "./TextoTopo";
function MenuTopo(){
    return(
        <>
            <header>
                <nav data-anime="top" className="nav-apresentacao ">
                    <div className="espaco-menu flex linha espaco-dentro">
                        <Logo/>
                        <ul>
                            <ol>
                                <button className="btn-comece-topo">Contactar</button>
                            </ol>
                        </ul>
                    </div>
                </nav>
            <TextoTopo/>
            </header>
        </>
    )
}
export default MenuTopo