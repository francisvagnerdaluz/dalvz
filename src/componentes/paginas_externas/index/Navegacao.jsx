import styled from'styled-components'
const Nav=styled.nav`
  display: flex;
  justify-content: space-around;
  width: 80%;
`
const A=styled.a`
  text-decoration: none;
  color: #3b4050;
`
export const Navegacao=()=>{
    return<>
        <Nav>
            <A href="#">API´s</A>
            <A href="#">Aplicações</A>
            <A href="#">Cursos</A>
            <A href="#">Currículo</A>
        </Nav>
    </>
}