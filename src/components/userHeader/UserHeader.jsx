import EditMode from "./EditMode";
import ReadMode from "./ReadMode";
import { useState } from "react";

export default function UserHeader() {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="header">
      {editMode ? (
        <EditMode isEdited={editMode} setIsEdited={setEditMode} />
      ) : (
        <ReadMode isEdited={editMode} setIsEdited={setEditMode} />
      )}
    </div>
  );
}
