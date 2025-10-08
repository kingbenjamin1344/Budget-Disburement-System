export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-3">
      <a className="navbar-brand"></a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link"
           href="#" 
           style={{marginRight: "50px"}}
           >
            Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#">About</a></li>
        </ul>
      </div>
    </nav>
    </>
  );
}