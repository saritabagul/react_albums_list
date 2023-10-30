import React from 'react'
import { Link } from "react-router-dom";

//get album from album list and show using html css and js
const List = (props) => {
  return (
    <div className="list-item">
    <div className="title">{props.album.title}</div>
    <div className="button-container">
        <Link to="/update-album">
          <button className="button" onClick={() => props.setUpdateAlbum(props.album)}>Update</button>
        </Link> 
        <button className="button delete-button" onClick={() => props.deleteAlbumFromList(props.album.id)}>Delete</button>
    </div>
  </div>
  )
}

export default List
