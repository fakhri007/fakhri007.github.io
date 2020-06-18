import React,{Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Row,Col,Container,Image } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'





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
  <Nav className="mr-sm-4" >

    <Link  activeClass="active" className="home nav-link nav-point" to="home" spy={true} smooth={true} offset={-140} duration={500} >Home</Link>

      <Link activeClass="active" className="product nav-link nav-point " to="product" spy={true} smooth={true} offset={-60} duration={500} >
    About Us</Link>

  </Nav>
  <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button className="d-none d-sm-block" variant="outline-info">Search</Button>
  </Form>
</Navbar.Collapse>
</Navbar>

<Element name="home" className="element" >


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
  </Element>
  <Element name="product" className="element" offset={-90} >
  <div className="container-fluid" style={{height:'30em', backgroundColor:'#7a8cff'}}>
  <div className="container about-us">
  <Container>
  <Row>
  <Col sm>
  <ScrollAnimation animateIn='bounceInLeft' anomateOut='bounceInLeft' animatePreScroll={true}>

  <h4>
    Story About Us
  </h4>
  <h1>
    Who We Are
  </h1>
  <br/>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim. </p>
  <ul>
  <li>lorem ipsum dolor amet</li>
  <li>ipsum dolor amet sensah</li>
  <li>lorem ipsum dolor amet</li>
  <li>ipsum dolor amet sensah</li>
  </ul>





</ScrollAnimation>
</Col>
<Col sm>
  <ScrollAnimation animateIn='bounceInRight' anomateOut='bounceInRight' animatePreScroll={true}>
  <Image className="image" src={require('./4.jpg')}  />
  </ScrollAnimation>
  </Col>
</Row>
</Container>
  </div>

  </div>
</Element>
<p>a</p>
<p>a</p>
<p>a</p>
<p>a</p>
<p>a</p>
<p>a</p>
<p>a</p>
<p>a</p>
<p>a</p>
<p>a</p>
<p>a</p>
<p>a</p>

<p>a</p>
<p>a</p>
<p>a</p>
<p>a</p>
<p>a</p>
<p>a</p>
<p>a</p>
<p>a</p>

<p>a</p>
<p>a</p>
<p>a</p>
<p>a</p>
<p>a</p>
<p>a</p>
<p>a</p>
<p>a</p>
</div>
</BrowserRouter>
)
}
}


export default App;
