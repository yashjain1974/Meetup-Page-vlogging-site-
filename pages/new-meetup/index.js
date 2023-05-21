import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import ScrollButton from "../../components/ui/ScrollButton";
const NewMeetup = (props) => {
  const router = useRouter();
  const onAddMeetupHandler = async (enteredData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  };
  return (
    <React.Fragment>
      <Head>
        <title>V-Meet:Add new Meetup</title>
        <meta
          name="description"
          content="Browse awesome vlogging site"
        ></meta>
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler}></NewMeetupForm>;
     
    </React.Fragment>
  );
};
export default NewMeetup;
