import React from 'react';
import { NavLink } from 'react-router-dom';
import DeletePopup from './deletePopup';

const DeleteNote = (props) => {
    return (
        <div className="view-note-container">
          <DeletePopup />
          <div className="edit-button">
            <NavLink className="edit-link" to="#">
              edit
            </NavLink>
          </div>
          <div className="delete-button">
            <NavLink className="delete-link" to={`/delete/${props.match.params.id}`}>
              delete
            </NavLink>
          </div>
          <div className="view-note__title">
          {props.notes[props.match.params.id].title}
          </div>
          <div className="view-note__body">
          {props.notes[props.match.params.id].body}
          </div>
        </div>
      )
}
export default DeleteNote;