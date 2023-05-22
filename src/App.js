import React, { useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Collapse from 'react-bootstrap/Collapse';
import "./App.css"
import { FiChevronDown,FiChevronUp,FiCornerDownRight,FiUser} from "react-icons/fi";
const App = () => {

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  return (
    <Container>
      <Row>
        <Col>
          <Table bordered style={{ backgroundColor: 'white',border:"0.5px solid rgb(233, 233, 238)" }}>
            <tbody>
              <tr >
                <td className='table-head' style={{backgroundColor: "rgb(234, 233, 247)"}}>Dates</td>
                <td style={{ backgroundColor: 'rgb(248, 210, 210)',color:"red" }}>23 May Mon</td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}>23 May Mon</td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}>23 May Mon</td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}>23 May Mon</td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}>23 May Mon</td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}>23 May Mon</td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}>23 May Mon</td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}>23 May Mon</td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}>23 May Mon</td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}>23 May Mon</td>
              </tr>
              <tr>
                <td className='table-head' style={{backgroundColor: "rgb(234, 233, 247)"}}>Stop Sell</td>
                <td style={{ backgroundColor: 'rgb(248, 210, 210)',color:"red" }}>CLOSE</td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}>OPEN</td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}>OPEN</td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}>OPEN</td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}>OPEN</td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}>OPEN</td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}>OPEN</td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}>OPEN</td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}>OPEN</td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}>OPEN</td>
               
              </tr>
              <tr>
                <td className='table-head' style={{backgroundColor: "rgb(234, 233, 247)"}}>Inventory</td>
                <td style={{ backgroundColor: 'rgb(248, 210, 210)',color:"red" }}><p className='td-ptag'>8</p><p>0 sold</p></td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}><p className='td-ptag'>8</p><p>0 sold</p></td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}><p className='td-ptag'>8</p><p>0 sold</p></td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}><p className='td-ptag'>8</p><p>0 sold</p></td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}><p className='td-ptag'>8</p><p>0 sold</p></td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}><p className='td-ptag'>8</p><p>0 sold</p></td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}><p className='td-ptag'>8</p><p>0 sold</p></td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}><p className='td-ptag'>8</p><p>0 sold</p></td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}><p className='td-ptag'>8</p><p>0 sold</p></td>
                <td style={{ backgroundColor: 'rgb(206, 228, 214)',color:"green" }}><p className='td-ptag'>8</p><p>0 sold</p></td>
              </tr>
             
              <tr >
                <td className='table-head' >
                  <div className='div-ele'><div className='div-ele'><FiCornerDownRight style={{fontSize:"25px",marginRight:"10px"}}/><div><p style={{fontSize:"12px"}}>#9871</p><p>Rooms only</p></div></div><p  onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open} >{open?<FiChevronUp/>:<FiChevronDown/>}</p></div></td>
                <td>9000</td>
                <td>7000</td>
                <td>12000</td>
                <td>13000</td>
                <td>8000</td>
                <td>12000</td>
                <td>9000</td>
                <td>14000</td>
                <td>11000</td>
                <td>10000</td>
              </tr>
              
              <tr>
                <Collapse in={open}>
                  <td id="example-collapse-text" colSpan="11" style={{padding:'0'}}>
                    <Table  bordered style={{padding:"0px",margin:"0"}}>
                      <tbody>
                        <tr>
                        <td className='table-head1' style={{backgroundColor: "rgb(234, 233, 247)"}}><div className='div-ele'>Single <div><FiUser/>1</div></div> </td>
                <td>9000</td>
                <td>7000</td>
                <td>12000</td>
                <td>13000</td>
                <td>8000</td>
                <td>12000</td>
                <td>9000</td>
                <td>14000</td>
                <td>11000</td>
                <td>10000</td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </Collapse>
              </tr>
              
              <tr>
                <Collapse in={open}>
                  <td id="example-collapse-text" colSpan="11" style={{padding:'0'}}>
                    <Table  bordered style={{padding:"0px",margin:"0"}}>
                      <tbody>
                        <tr>
                        <td className='table-head1' style={{backgroundColor: "rgb(234, 233, 247)"}}><div className='div-ele'>Single <div><FiUser/>2</div></div></td>
                <td>9000</td>
                <td>7000</td>
                <td>12000</td>
                <td>13000</td>
                <td>8000</td>
                <td>12000</td>
                <td>9000</td>
                <td>14000</td>
                <td>11000</td>
                <td>10000</td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </Collapse>
              </tr>
              <tr>
                <Collapse in={open}>
                  <td id="example-collapse-text" colSpan="11" style={{padding:'0'}}>
                    <Table  bordered style={{padding:"0px",margin:"0"}}>
                      <tbody>
                        <tr>
                          <div >
                            <td style={{width:"300px",textAlign:"left",}}><FiCornerDownRight style={{fontSize:"25px",marginRight:"10px"}}/>Extra charges</td>
                          <td 
                         onClick={() => setOpen1(!open1)}
                         aria-controls="example-collapse-text"
                         aria-expanded={open1}>{open1?<FiChevronUp/>:<FiChevronDown/>}</td>
                
                          </div>
                        
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </Collapse>
              </tr>
              
              <tr>
                <Collapse in={open1}>
                  <td id="example-collapse-text" colSpan="11" style={{padding:'0'}}>
                    <Table  bordered style={{padding:"0px",margin:"0"}}>
                      <tbody>

                      <tr >
                <td className='table-head1' style={{backgroundColor: "rgb(234, 233, 247)"}}><div className='div-ele'>Extra Adult 1<div><FiUser/>1</div></div></td>
                <td>1500</td>
                <td>1500</td>
                <td>1500</td>
                <td>1500</td>
                <td>1500</td>
                <td>1500</td>
                <td>1500</td>
                <td>1500</td>
                <td>1500</td>
                <td>1500</td>
              </tr>
                        <tr>
                          <td className='table-head1' style={{backgroundColor: "rgb(234, 233, 247)"}}><div className='div-ele'>Extra Child 1 <div><FiUser/>1</div></div></td>
                          <td>1500</td>
                <td>1500</td>
                <td>1500</td>
                <td>1500</td>
                <td>1500</td>
                <td>1500</td>
                <td>1500</td>
                <td>1500</td>
                <td>1500</td>
                <td>1500</td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </Collapse>
              </tr>
           
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}


export default App; 