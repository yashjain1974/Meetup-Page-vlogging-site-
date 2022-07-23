import classes from "./MainNavigation.module.css";
import { useState } from "react";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>V-Meet </div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
