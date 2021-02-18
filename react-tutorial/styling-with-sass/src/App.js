
import './App.scss';
import Button from './Component/Button';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>

      <div className="buttons">
        <Button size="large" color="gray">BUTTON</Button>
        <Button color="gray">BUTTON</Button>
        <Button size="small" color="gray">BUTTON</Button>
      </div>

      <div className="buttons">
        <Button size="large" color="pink">BUTTON</Button>
        <Button color="pink">BUTTON</Button>
        <Button size="small" color="pink">BUTTON</Button>
      </div>

      
      <div className="buttons">
        <Button size="large" outline={true}>BUTTON</Button>
        <Button color="gray" outline={true}>BUTTON</Button>
        <Button size="small" color="pink" outline={true}>BUTTON</Button>
      </div>

      <div className="buttons">
        <Button size="large" fullWidth={true} >BUTTON</Button>
        <Button color="gray" fullWidth={true}>BUTTON</Button>
        <Button size="small" color="pink" fullWidth={true} className="cutomized-button" onClick={()=>{
          console.log('click');
        }}
        onMouseMove={()=>{
          console.log('mouseMove');
        }}
        >BUTTON</Button>
      </div>
    </div>
  )
}

export default App;
