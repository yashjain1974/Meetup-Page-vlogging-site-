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

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        id: meetupId,
        title: "First meetup",
        address: "23,baker street",
        description: "The meetup description",
      },
    },
  };
}

export default MeetupDetails;
