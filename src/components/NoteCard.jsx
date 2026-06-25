const NoteCard = ({ note }) => {
  const badgeColors = {
    Personal: "bg-green-100 text-green-700",
    Work: "bg-blue-100 text-blue-700",
    Study: "bg-purple-100 text-purple-700",
    
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-lg">
          {note.title}
        </h2>

        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${badgeColors[note.category]}`}
        >
          {note.category}
        </span>
      </div>

      <p className="text-gray-600">
        {note.body}
      </p>
    </div>
  )
}

export default NoteCard