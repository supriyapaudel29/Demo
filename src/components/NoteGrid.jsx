import NoteCard from "./NoteCard"

const NoteGrid = ({ notes }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
        />
      ))}
    </div>
  )
}

export default NoteGrid