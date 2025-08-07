"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [note, setNote] = useState("");

  // Load note once on mount
  useEffect(() => {
    const saved = localStorage.getItem("note");
    if (saved) setNote(saved);
    console.log("Loaded note from storage:", saved);
  }, []);

  // Save note whenever it changes
  useEffect(() => {
    localStorage.setItem("note", note);
    console.log("Saved note to storage:", note);
  }, [note]);

  console.log("Rendering with note:", note);

  return (
    <div>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Type your notes here"
      />
      <p>{note}</p>
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
