import React,{useState} from 'react'

import styled,{ThemeProvider} from 'styled-components'
import Button from './components/Button';
import Dialog from './components/Dialog'



const AppBlock =styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border : 1px solid black;
  padding: 1rem;
`;

const palette={
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595'
}

const ButtonGroup = styled.div`
&+&{
  margin-top:1rem;
}`

function App() {
const onConfirm =() =>{

  setDialog(false);
}
const onCancel=()=>{
  setDialog(false);
}
const [dialog,setDialog]= useState(false);
const onClick=()=>{
  setDialog(true);
}

  return (
    <ThemeProvider theme={{palette}} >
      <>
    <AppBlock>
      <Button color="pink" size = "large" onClick={onClick}>삭제</Button>
    </AppBlock>
    <Dialog title="real delete?" confirmText="del" cancelText="can"
    visible={dialog}
    onConfirm={onConfirm}
    onCancel={onCancel}>
        data real del?
      </Dialog>
      </>
    </ThemeProvider>

  );
}

export default App;
