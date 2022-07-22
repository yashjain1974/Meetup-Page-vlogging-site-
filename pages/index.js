import React, { useEffect, useState } from "react";

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
const HomePage = (props) => {
  // const [data,setData]=useState([]);
  // useEffect(()=>{
  //     setData(DUMMY_MEETUP);

  // },[])
  return (
    <React.Fragment>
      <MeetupList meetups={props.meetups}></MeetupList>
    </React.Fragment>
  );
};

export async function getServerSideProps(context) {
  return {
    props: { meetups: DUMMY_MEETUP },
  };
}
// export async function getStaticProps(){
// //fetch data from an API
// return{
//     props:{
//         meetups:DUMMY_MEETUP
//     },
//     revalidate:10
// }
// }

export default HomePage;
