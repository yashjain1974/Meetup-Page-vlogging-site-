import React from "react";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    address: "Some Address",
    description: "This is a First Meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_960_720.jpg",
    address: "Some Address",
    description: "This is a Second Meetup",
  },
];
const HomePage = () => {
  return (
    <React.Fragment>
      <MeetupList meetups={DUMMY_MEETUP}></MeetupList>
    </React.Fragment>
  );
};

export default HomePage;
