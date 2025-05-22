import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateUser } from "../../services/userServices";
import { updateUserInfos } from "../../features/userInfos";
import "./UserHeader.scss";

export default function EditMode({ isEdited, setIsEdited }) {
  const dispatch = useDispatch();

  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const userToken = useSelector((state) => state.login.token);
  const storedFirstName = useSelector(
    (state) => state.user.value.userFirstName
  );
  const storedLastName = useSelector((state) => state.user.value.userLastName);

  function updateFirstName(event) {
    setNewFirstName(event.target.value);
  }
  function updateLastName(event) {
    setNewLastName(event.target.value);
  }

  function cancelEdit() {
    setIsEdited(!isEdited);
  }

  async function submitForm(event) {
    event.preventDefault();
    const updateName = await updateUser(userToken, newFirstName, newLastName);
    dispatch(
      updateUserInfos({
        firstName: updateName.body.firstName,
        lastName: updateName.body.lastName,
      })
    );
    setIsEdited(!isEdited);
  }

  return (
    <>
      <h1>Welcome back</h1>
      <form action="" id="update-name" onSubmit={submitForm} method="put">
        <input
          onChange={updateFirstName}
          value={newFirstName}
          type="text"
          id="given-name"
          required
          className="left"
          autoComplete="given-name"
          placeholder={storedFirstName}
        />
        <input
          onChange={updateLastName}
          value={newLastName}
          type="text"
          id="family-name"
          required
          className="right"
          autoComplete="family-name"
          placeholder={storedLastName}
        />
        <button className="edit-button left">Save</button>
        <button className="edit-button right" onClick={cancelEdit}>
          Cancel
        </button>
      </form>
    </>
  );
}
