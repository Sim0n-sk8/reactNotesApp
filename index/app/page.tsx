"use client"

import { useState, useEffect } from "react";





export default function Home() {

const[note,setNote] = useState("");



//saving the mf notes
useEffect(() =>{
  localStorage.setItem("note",note);
  //HEY MA AS MA OOIT DIE CODE SIEN HIER LOG EK 
  console.log("Saved note to localStorage:", note);
},[note])






  return (
    <div>
        <input
        type="text"
        className="notePad"
        placeholder="Type your notes here"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      {/* this serves no actual purpose but im just messing around
      <p>{note}</p>*/}
    </div>
  );
}



/*
📝 Notes App - Project Plan

📌 Core Features:
- Take down notes
- Style notes (bold, italic, highlight, etc.)
- Save notes
- Fetch notes
- Password-protected access

🧱 Component Structure:
- Login / Unlock screen
- NotesEditor (write & style notes)
- NotesList or NoteCard (display saved notes)
- Optional: Header / Sidebar for navigation

🧠 State Management:
- Authentication state (is app unlocked?)
- Notes array (each with content & style info)
- Active note (currently being edited)
- Style options (bold, color, etc.)
- Storage via useState, useReducer, or global store (Context/Zustand)

🔐 Authentication Logic:
- Set a password (hardcoded or prompt-based)
- Unlock screen with password input
- If password is correct, render notes UI
- Password check can use localStorage for MVP simplicity

✍️ Editor Logic:
- Text input or contentEditable div
- Style buttons: bold, italic, highlight, etc.
- Apply style to selected text or via rich text editor
- Save changes automatically or with a save button

💾 Save & Fetch Logic:
- Store notes in localStorage or indexedDB
- On app load, fetch notes from storage
- On edit/save, update stored data
- Optionally add timestamps, IDs

🎨 Styling Notes:
- Use inline styles or CSS classes
- Each note can store metadata about formatting
- Optionally support markdown or a rich text library

✨ Extras (optional):
- Export/import notes (e.g., JSON or .txt)
- Add tags or categories
- Search and filter notes
- Cloud sync (Supabase, Firebase, etc.)
- Dark/light mode toggle
- Password hint or change option

*/
