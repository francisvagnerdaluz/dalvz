import styled from "styled-components";
import {Card} from "./Card";
const Box=styled.div`
  margin-top: 50px;
`
const Cards=styled.div`
  
`
export const APIs=()=>{
    return<>
        <Box>
            <h1>API's restful para explorar em seus projetos</h1>
        </Box>
        <Cards>
            <Card/>
        </Cards>
    </>
}