import React from "react";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props)
 {
      function handleEdit()
       {
          props.onEdit(props.id);
       }
        
      function handleDelete()
       {
          props.onDelete(props.id);
       }

      return (
        <div className="note">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <Fab onClick={handleEdit}>
            <EditIcon />
          </Fab>
          <Fab onClick={handleDelete}>
              <DeleteIcon />
          </Fab>
        </div>
      );
 }

export default Note;