import classes from "./MainNavigation.module.css";
import {  useContext } from "react";
import AuthContext from "../../store/auth-context";
import Link from "next/link";
import { useRouter } from "next/router";
import LoadingSpinner from "../ui/LoadingSpinner";

function MainNavigation() {
  const authCtx = useContext(AuthContext);
  
  const router=useRouter();
  console.log(authCtx);
  const logoutHandler = () => {
    
    authCtx.logout();
   
    router.replace('/');
    
   
  };

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
            <li className={router.pathname=="/new-meetup"?"active":""}>
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
