import { Link } from "react-router-dom";
function SidebarFooter() {
  return (
    <>
      <div className="social_media">
        <Link to="#">
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-instagram"></i>
        </Link>
      </div>
    </>
  );
}

export default SidebarFooter;
