import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import update from 'react-addons-update';

function App()
	{
	  const [notes, setNotes] = useState([]);

	  function addNote(newNote)
	   {
	    	setNotes(prevNotes => {
	      		return [...prevNotes, newNote];
	   		});
	   }

	  function deleteNote(id)
	   {
		    setNotes(prevNotes => {
		      	const newArray = update(initialArray, {$push: [4]});
		     	});
	   		});
	   }

	  function editNote(id)
		{
			setNotes(prevNotes => {
				return prevNotes.splice((noteItem, index) => {
					return index
				});
			};
		}

	  return (
	    <div>
	      <Header />
	      <CreateArea onAdd={addNote} />
	      {notes.map((noteItem, index) => {
	        return (
	          <Note
	            key={index}
	            id={index}
	            title={noteItem.title}
	            content={noteItem.content}
	            onDelete={deleteNote}
				onEdit={editNote}
	          />
	        );
	      })}
	      <Footer />
	    </div>
	  );
	}

export default App;