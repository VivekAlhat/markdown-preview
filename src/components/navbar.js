import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="mx-auto" href="/">
        <h4>Markdown Viewer</h4>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavbarComponent;
