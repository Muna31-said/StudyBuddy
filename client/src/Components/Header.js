import { Navbar, Input } from "reactstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar style={navStyle}>
      {/* 🔥 Logo */}
      <h3 style={{ margin: 0, fontWeight: "600" }}>
        <span style={{ color: "white" }}>Study</span>
        <span style={{ color: "#ffd54f" }}>Buddy</span>
      </h3>

      {/* 🔥 Links */}
      <div style={centerLinks}>
        <Link
          to="/"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = "#ffd54f")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Home
        </Link>

        <Link
          to="/add"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = "#ffd54f")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Add Skill
        </Link>

        <Link
          to="/request"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = "#ffd54f")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Request
        </Link>

        <Link
          to="/skills"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = "#ffd54f")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Skills
        </Link>
      </div>

      {/* 🔥 Search */}
      <div style={searchContainer}>
        <Input placeholder="Search..." style={searchStyle} />
      </div>
    </Navbar>
  );
}

const navStyle = {
  background: "#136756",
  padding: "15px 50px",
  display: "flex",
  alignItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};

const centerLinks = {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "35px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "15px",
  transition: "0.3s",
};

const searchContainer = {
  marginLeft: "auto",
};

const searchStyle = {
  width: "220px",
  borderRadius: "20px",
  padding: "6px 12px",
  border: "none",
};

export default Header;
