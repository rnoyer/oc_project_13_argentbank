import { useSelector } from "react-redux";

export default function ReadMode({ isEdited, setIsEdited }) {
  const storedFirstName = useSelector(
    (state) => state.user.value.userFirstName
  );
  const storedLastName = useSelector((state) => state.user.value.userLastName);

  function switchEditMode() {
    setIsEdited(!isEdited);
  }

  return (
    <>
      <h1>
        Welcome back
        <br />
        {storedFirstName} {storedLastName}!
      </h1>
      <button className="edit-button" onClick={switchEditMode}>
        Edit Name
      </button>
    </>
  );
}
