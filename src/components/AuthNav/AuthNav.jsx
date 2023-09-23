import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </div>
    // <div>
    //   <NavLink to="/register">Register</NavLink>
    //   <NavLink to="/login">Log In</NavLink>
    // </div>
  );
};
