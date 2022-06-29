import styled from 'styled-components'
const Box=styled.div`
  border: 1px solid lightgray;
  border-radius: 3px;
  width: 150px;
  padding: 10px;
  margin-top: 30px;
`
export const Card=()=>{
    return<>
        <Box>
            <h1>Usuários</h1>
            <p>API para cadastro e gerenciamento de usuários</p>
        </Box>
    </>
}