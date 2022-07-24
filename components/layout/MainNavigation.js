import classes from "./MainNavigation.module.css";
import { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import Link from "next/link";
import { useRouter } from "next/router";

function MainNavigation() {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);
  const logoutHandler = () => {
    authCtx.logout();
  };
const router=useRouter();
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>V-Meet </div>
      </Link>
      <nav>
        <ul>
          <li className={router.pathname=="/"?"active":""}>
            <Link href="/">All Meetups</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link href="/new-meetup">Add Meetup</Link>
            </li>
          )}
          {!isLoggedIn && (
            <li className={router.pathname=="/auth"?"active":""}>
              <Link href="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button className={classes.btn} onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
