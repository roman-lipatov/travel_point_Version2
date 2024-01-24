import { PersonsList } from './components/PersonsList';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FullInfo } from './components/FullInfo';
import { Card } from 'react-bootstrap';

function App() {

  return (
    <Router>
 <Card style={{backgroundColor: "#00FFFF", height: "100vh"}}>
    <Card.Header 
      style={{
        backgroundColor: "pink", 
        height: "50px", 
        fontSize: 40, 
        fontWeight: "500",
        textShadow: "1px 1px 2px #00FFFF, 0 0",
        color: "black",
        display: "flex",
        justifyContent: "center"
      }}>Test task</Card.Header>
      <Routes>
        <Route path="/" element={ <PersonsList />}/>
        <Route path="/fullInfo" element={ <FullInfo />}/>
      </Routes>
    </Card>
  </Router>
   
  );
}

export default App;
