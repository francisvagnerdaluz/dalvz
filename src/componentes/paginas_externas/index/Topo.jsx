import styled from 'styled-components'
import {Navegacao} from "./Navegacao";
import {Logar} from "./Logar";
const LogoMarca=styled.img`
  width: 50px;
`
const P=styled.p`
  color: #3b4050;
`
const DaLvz=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`
const Box=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Topo=()=>{
    return<>
        <Box>
            <DaLvz>
                <LogoMarca src="./dalvz.svg"/>
                <P>daLvz</P>
            </DaLvz>
            <Navegacao/>
            <Logar/>
        </Box>
    </>
}