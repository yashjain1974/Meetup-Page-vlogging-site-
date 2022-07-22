import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetup = (props) => {
  const onAddMeetupHandler = async (enteredData) => {
    const router = useRouter();
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
  return <NewMeetupForm onAddMeetup={onAddMeetupHandler}></NewMeetupForm>;
};
export default NewMeetup;
