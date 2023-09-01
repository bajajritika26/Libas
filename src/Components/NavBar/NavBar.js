import Style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useValue } from "../../context";


function NavBar() {
  const { signUp, userPresent, handleLogout } = useValue();
  return (
    <>
      <div className={Style.navBar}>
        <div className={Style.firstDiv}>
          <NavLink className="styleLink" to="/">
            <img
              src="https://www.libas.in/cdn/shop/files/logo_7d57ac0e-5c78-4c0d-b167-b113155c6e9c_150x.png?v=1642148860"
              alt="Logo"
            />
          </NavLink>
        </div>
        <div className={Style.secondDiv}>
            <NavLink to="/cottonSets">
                <h3>NEW</h3>
            </NavLink>
            <NavLink to="/cottonSets">
                <h3>KURTAS</h3>
            </NavLink>
            <NavLink to="/cottonSets">
                <h3>SUITS</h3>
            </NavLink>
            <NavLink to="/cottonSets">
                <h3>SAREES</h3>
            </NavLink>
            <NavLink to="/cottonSets">
                <h3>DRESSES</h3>
            </NavLink>
            <NavLink to="/cottonSets">
                <h3>BOTTOMS</h3>
            </NavLink>
            <NavLink to="/cottonSets">
                <h3>PLUS SIZE</h3>
            </NavLink>
            <NavLink to="/cottonSets">
                <h3>LOUNGE WEAR</h3>
            </NavLink>
        </div>
        <div className={Style.thirdDiv}>
          
          <div>
            <NavLink to="/">
              <img
                src="https://img.icons8.com/?size=1x&id=73&format=png"
                alt="Logo"
              />
            </NavLink>
          </div>
          <div>
            {userPresent ? (
              <NavLink className="styleLink" to="order">
                <img
                  src="https://img.icons8.com/?size=1x&id=3686&format=png"
                  alt="Logo"
                />

                {/* <h3> Order </h3> */}
              </NavLink>
            ) : null}
          </div>
          <div>
            {userPresent ? (
              <NavLink className="styleLink" to="cart">
                <img
                  src="https://img.icons8.com/?size=1x&id=9671&format=png"
                  alt="Logo"
                />
              </NavLink>
            ) : null}
          </div>
          
            {!userPresent ? (
              <div>
              <NavLink className="styleLink" to={signUp ? "/signUp" : "signIn"}>
                <img
                  src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/account_225fe331-72f7-4d57-b03c-b65f4712ae9a.png?v=1682576454"
                  alt="Logo"
                />

                {/* <h3 onClick={toggleSignUp}> {signUp ? 'SignUp' : 'SignIn'}  </h3> */}
              </NavLink>
              </div>
            ) : (
              <div>
              <NavLink onClick={handleLogout} className="styleLink" to="/">
                <img
                  src="https://img.icons8.com/?size=1x&id=2445&format=png"
                  alt="Logo"
                />

                {/* <h3 onClick={handleLogout}>LogOut</h3> */}
              </NavLink>
          </div>

            )}
        </div>
      </div>

      {/* <Outlet /> */}
    </>
  );
}

export default NavBar;
