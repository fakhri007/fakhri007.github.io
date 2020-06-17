import React,{Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter, Link, Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

class App extends Component {
state = {
isTop: true,
};

componentDidMount() {
document.addEventListener('scroll', () => {
const isTop = window.scrollY < 10;
if (isTop !== this.state.isTop) {
this.setState({ isTop })
}
});
}
render(){
return(
<BrowserRouter>
  <div>
  <>
  <Navbar className="nav-bg-atas" variant="dark" >
  <Navbar.Brand className="semi-light-color" href="#home">

  BUILDER SKY
  </Navbar.Brand>
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
      <Nav className="mr-sm-1 " >
      <Nav.Link href="#twitter" className="nav-point d-none d-sm-block"><SocialIcon network="twitter" fgColor="#ffffff"/></Nav.Link>
      <Nav.Link href="#twitter" className="nav-point d-none d-sm-block"><SocialIcon network="facebook" fgColor="#ffffff"/></Nav.Link>
      <Nav.Link href="#twitter" className="nav-point d-none d-sm-block"><SocialIcon network="instagram" fgColor="#ffffff"/></Nav.Link>
      </Nav>
  </Navbar.Collapse>
  </Navbar>

  </>
  <Navbar  className="nav-bg-bwh" expand="lg" fixed="top" bg="light" style={{position:'sticky',top:0}}>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
  <Nav className="mr-sm-2" >
    <Nav.Link href="#home" className="nav-point">Home</Nav.Link>
    <Nav.Link></Nav.Link>
    <Nav.Link href="#product" className="nav-point">Product</Nav.Link>
    <Nav.Link></Nav.Link>
    <Nav.Link href="#link" className="nav-point">Profile</Nav.Link>
    <Nav.Link></Nav.Link>
    <NavDropdown title="Branch" id="basic-nav-dropdown" className="nav-point">
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
    <Nav.Link></Nav.Link>
  </Nav>
  <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button className="d-none d-sm-block" variant="outline-info">Search</Button>
  </Form>
</Navbar.Collapse>
</Navbar>


  <div style= {{position :'stycky' , top:0}} >
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false}>
      <div>
        <img src={require('./1.jpg')} style={{maxHeight:520}}/>

      </div>
      <div>
        <img src={require('./2.jpg')} style={{maxHeight:520}}/>

      </div>
      <div>
        <img src={require('./3.jpg')} style={{maxHeight:520}}/>

      </div>
    </Carousel>
  </div>

  <div style={{position:'sticky', display:'block',width:'100%',height:'40em', backgroundColor:'#3399ff'}}>

  </div>
</div>
</BrowserRouter>
)
}
}


export default App;
