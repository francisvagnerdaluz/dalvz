import React from 'react'
import Img from '../../assets/img/404.png'
import {Button} from '@material-ui/core'
import { styled } from '@mui/styles'
const IMG=styled('img')({
    width:'300px',
    marginTop:'200px'
})
const DIV=styled('div')({
    textAlign:'center'
})
const Pagina404=()=>{
  return(
      <DIV>
          <IMG src={Img} alt=""/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Button href="/" variant="contained" color="secondary">Voltar</Button>
      </DIV>
  )
}
export default Pagina404