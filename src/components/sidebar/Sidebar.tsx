import "./Sidebar.css";
export default function Sidebar(){
    return(
        <>
            <div className="sidenav">
                <div className="sidebar-logo">
                    <img src="/logo.png" alt="Logo" className="logo"/>
                </div>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
            </div>
        </>
    );
}