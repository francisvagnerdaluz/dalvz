import {Topo} from "./Topo";
import {Postagens} from "./Postagens";
import styled from 'styled-components'
import {APIs} from "./APIs";
import {Cursos} from "./Cursos";
const Box=styled.div`
  padding: 10px 20% 20%;
  //display: flex;
  //justify-content: space-between;
  //align-items: center;
`
const BoxInterno=styled.div`
  padding: 0px 2% 2%;
`
export const Index=()=>{
    return<>
        <Box>
            <Topo/>
            <BoxInterno>
                <Postagens/>
                <APIs/>
                <Cursos/>
            </BoxInterno>
        </Box>
    </>
}