import React, { Fragment } from "react";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetails = (props) => {
  return (
    <Fragment>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      ></MeetupDetail>
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://yash:rzE07HaQWX1yiRd2@cluster0.wz0i35s.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  //database
  const db = client.db();
  //table
  const meetUpsTable = db.collection("meetups");
  //inserting data
  const meetups = await meetUpsTable.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://yash:rzE07HaQWX1yiRd2@cluster0.wz0i35s.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  //database
  const db = client.db();
  //table
  const meetUpsTable = db.collection("meetups");
  //inserting data
  const selectedmeetups = await meetUpsTable.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedmeetups._id.toString(),
        title: selectedmeetups.title,
        image: selectedmeetups.image,
        address: selectedmeetups.address,
        description: selectedmeetups.description,
      },
    },
  };
}

export default MeetupDetails;
