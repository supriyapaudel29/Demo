import sampleNotes from "./data/sampleNotes"
import NoteGrid from "./components/NoteGrid"
import SearchBar from "./components/SearchBar"
import NewNoteButton from "./components/NewNoteButton"

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-6">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <h1 className="text-3xl font-bold">
            Note Tracker
          </h1>

          <NewNoteButton />
        </div>

        <SearchBar />

        <NoteGrid notes={sampleNotes} />

      </div>
    </div>
  )
}

export default App