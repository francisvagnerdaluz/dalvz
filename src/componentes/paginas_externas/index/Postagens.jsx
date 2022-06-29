import styled from 'styled-components'
const P=styled.p`
  color: #3b4050;
  
`
const Img=styled.img`
  width: 170px;
`
const Box=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 80px;
`
const Label=styled.label`
  font-size: 90%;
  color: #cecece;
`
const BoxInterno=styled.div`
  width: 83%;
`
export const Postagens=()=>{
    return<>
        <Box>
            <Img src="./imagem_blog.png"/>
            <BoxInterno>
                <h1>Jornada JavaScript</h1><br/>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. <a href="">Cadastrar-se na jornada</a></P>
                <Label>Postado dia 28/06/2022</Label>
            </BoxInterno>
        </Box>
    </>
}