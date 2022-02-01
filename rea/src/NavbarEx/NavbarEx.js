import {Navbar,Container,Nav} from "react-bootstrap";

const NavbarEx =()=>{
    return(
<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Our website</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">About</Nav.Link>
    <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
</Navbar>
    )
}
export default NavbarEx