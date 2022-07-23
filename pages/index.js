import React, { useEffect, useState } from "react";
import { MongoClient } from "mongodb";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUP = [
//   {
//     id: "m1",
//     title: "First Meetup",
//     image:
//       "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
//     address: "Some Address",
//     description: "This is a First Meetup",
//   },
//   {
//     id: "m2",
//     title: "Second Meetup",
//     image:
//       "https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_960_720.jpg",
//     address: "Some Address",
//     description: "This is a Second Meetup",
//   },
// ];
const HomePage = (props) => {
  // const [data,setData]=useState([]);
  // useEffect(()=>{
  //     setData(DUMMY_MEETUP);

  // },[])

  return (
    <React.Fragment>
      <Head>
        <title>Meetup:A vlog</title>
        <meta
          name="description"
          content="Browse this awesome vlogging site"
        ></meta>
      </Head>

      <MeetupList meetups={props.meetups}></MeetupList>
    </React.Fragment>
  );
};

// export async function getServerSideProps(context) {
//   return {
//     props: { meetups: DUMMY_MEETUP },
//   };
// }
export async function getStaticProps() {
  //fetch data from an API

  const client = await MongoClient.connect(
    "mongodb+srv://yash:bh0UtSpeVPh5qdhN@cluster0.wz0i35s.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  //database

  const db = client.db();
  //table
  const meetUpsTable = db.collection("meetups");
  //inserting data
  const meetups = await meetUpsTable.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
