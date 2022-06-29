import styled from "styled-components";
import {Card} from "./Card";
const Box=styled.div`
  margin-top: 50px;
`
const Cards=styled.div`
  padding-top: 20px;
`
export const Cursos=()=>{
    return<>
        <Box>
            <h1>Cursos de JavaScript e NodeJs</h1>
        </Box>
        <Cards>
            <iframe width="170" height="100" src="https://www.youtube.com/embed/Ptbk2af68e8"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </Cards>
    </>
}