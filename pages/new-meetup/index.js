import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetup = (props) => {
  const onAddMeetupHandler = (enteredData) => {
    console.log(enteredData);
    props.onAdd(enteredData);
  };
  return <NewMeetupForm onAddMeetup={onAddMeetupHandler}></NewMeetupForm>;
};
export default NewMeetup;
