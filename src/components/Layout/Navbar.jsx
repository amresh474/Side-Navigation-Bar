import Search from "../Search/search";
function Navbar() {
  return (

      <div className="navigation">
        <Search />

        <div className="profile">
          <i className="far fa-bell"></i>
          <img src="img/1.jpg" alt="" />
        </div>
      </div>

  );
}

export default Navbar;
