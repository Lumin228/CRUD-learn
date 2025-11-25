import { useEffect, useState } from 'react'
import css from './App.module.css'
import SearchBox from '../SearchBox/SearchBox'
import Pagination from '../Pagination/Pagination'
import { fetchFunc } from '../../fetchFunc/fetchFunc'
import NoteList from '../NoteList/NoteList'
import { Note } from '../../types/types'
import NoteForm from '../NoteForm/NoteForm'


function App() {
  const [notes, setNotes] = useState<Note[]>([])
  const [openForm, setOpenForm] = useState<boolean>(false)
  useEffect(() => {
    fetchFunc().then(data => {
      setNotes(data.notes)
    });
  }, [])


  return (
    <>
      <div className={css.app}>
        <header className={css.toolbar}>
          <SearchBox />
          {/* {notes && notes.length > 0 && (<Pagination pages={totalPages}/>)} */}
          <button className={css.button} onClick={() => setOpenForm(true)}>Create note</button>
        </header>
        <main>
          {openForm && (<NoteForm />)}
          {notes.length > 0 && <NoteList list={notes} />}
        </main>
      </div>
    </>
  )
}

export default App
