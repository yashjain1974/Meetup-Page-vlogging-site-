import React, { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetails = () => {
  return (
    <Fragment>
      <MeetupDetail
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
        title="First meetup"
        address="23,baker street"
        description="The meetup description"
      ></MeetupDetail>
    </Fragment>
  );
};

export default MeetupDetails;
