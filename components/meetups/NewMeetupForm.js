import React, { useRef, useState } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";
import { Router, useRouter } from "next/router";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  function submitHandler(event) {
    event.preventDefault();
    setIsLoading(true);

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
    router.replace("/");
  }

  return (
    <React.Fragment>
      <div className={classes.bdy}>
        {(isLoading && (
          <div className="loading">
            <LoadingSpinner></LoadingSpinner>{" "}
          </div>
        )) || (
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="title">Meetup Title</label>
              <input type="text" required id="title" ref={titleInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="image">Meetup Image (Url)</label>
              <input type="url" required id="image" ref={imageInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="address">Address</label>
              <input type="text" required id="address" ref={addressInputRef} />
            </div>
            <div className={classes.control}>
              <label className={classes.desc} htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                required
                rows="5"
                ref={descriptionInputRef}
              ></textarea>
            </div>
            <div className={classes.actions}>
              <button>Add Meetup</button>
            </div>
          </form>
        )}
      </div>
    </React.Fragment>
  );
}

export default NewMeetupForm;
