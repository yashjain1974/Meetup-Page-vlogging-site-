import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";
import React, { useState } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";

function MeetupItem(props) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const onShowDetailHandler = () => {
    setIsLoading(true);
    router.push("/" + props.id);
  };
  return (
    <React.Fragment>
      {(isLoading && (
        <div className="loading">
          <LoadingSpinner></LoadingSpinner>
        </div>
      )) || (
        <Card>
          <li className={classes.item}>
            <div className={classes.image}>
              <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
              <h3>{props.title}</h3>
              <address>{props.address}</address>
            </div>
            <div className={classes.actions}>
              <button onClick={onShowDetailHandler}>Show Details</button>
            </div>
          </li>
        </Card>
      )}
    </React.Fragment>
  );
}

export default MeetupItem;
