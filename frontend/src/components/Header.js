import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faBagShopping,
  faPersonWalkingArrowRight,
  faShop,
  faCartShopping,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import './Header.scss';

export default function Header() {
  const { loggedInUser, logOutUser } = useContext(UserContext);
  const profile = <FontAwesomeIcon icon={faUser} />;
  const purchases = <FontAwesomeIcon icon={faBagShopping} />;
  const logout = <FontAwesomeIcon icon={faPersonWalkingArrowRight} />;
  const shop = <FontAwesomeIcon icon={faShop} />;
  const cart = <FontAwesomeIcon icon={faCartShopping} />;
  const gear = <FontAwesomeIcon icon={faGear} />;

  const root = document.querySelector(':root');

  function openTab() {
    root.style.setProperty('--containerHeigh', '85vh');
    root.style.setProperty('--containerArc', '45deg');
    root.style.setProperty('--rightBox', '53%');
    root.style.setProperty('--leftBox', '10%');
    root.style.setProperty('--disp', 'unset');
  }

  return (
    <div className="navBackground sticky-top">
      <div className="nav-container container-lg sticky-top bg-none">
        <nav className="navbar navbar-default navbar-expand-xl mb-5">
          <div className="container-fluid">
            <NavLink className="navbar-brand" id="logoLink" to="/" onClick={openTab}>
              mind flip
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 gap-2" id="nav-list">
                {loggedInUser ? (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link btn px-3" to="/shop">
                        Shop
                        {' '}
                        <i>{shop}</i>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link btn px-3" to="/cart">
                        Kosár
                        {' '}
                        <i>{cart}</i>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link btn px-3" to="/purchases">
                        Vásárlásaim
                        {' '}
                        <i>{purchases}</i>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link btn px-3" to="/profile">
                        Profil
                        {' '}
                        <i>{profile}</i>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link logout btn px-3"
                        to="/"
                        onClick={logOutUser}
                      >
                        Kijelentkezés
                        {' '}
                        <i>{logout}</i>
                      </NavLink>
                    </li>
                    {loggedInUser.isAdmin && (
                      <li className="nav-item">
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            id="dropDownButton"
                          >
                            <i>{gear}</i>
                            {' '}
                            Admin
                          </button>
                          <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/admin/orders">Orders</Link></li>
                            <li><Link className="dropdown-item" to="/admin/news">News</Link></li>
                            <li><Link className="dropdown-item" to="/admin/products">Products</Link></li>
                            <li><Link className="dropdown-item" to="/admin/purchases">Purchases</Link></li>
                          </ul>
                        </div>
                      </li>

                    )}

                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link btn px-3" to="/play">
                        Play
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link btn px-3" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link btn px-3" to="/rankings">
                        Rankings
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link btn px-3" to="/login">
                        Profile
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
