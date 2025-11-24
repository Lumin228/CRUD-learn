import { useEffect, useState } from 'react'
import css from './App.module.css'
import SearchBox from '../SearchBox/SearchBox'
import Pagination from '../Pagination/Pagination'
import { fetchFunc } from '../../fetchFunc/fetchFunc'
import NoteList from '../NoteList/NoteList'
import { Note } from '../../types/types'


function App() {
  const [notes, setNotes] = useState<Note[]>([])
  useEffect(() => { 
    fetchFunc().then(data => setNotes(data.items))
  }, [])
  return (
    <>
      <div className={css.app}>
        <header className={css.toolbar}>
          <SearchBox />
          {/* <Pagination /> */}
          {/* Кнопка створення нотатки */}
        </header>
        <main >
          {notes.length !== 0 ? <NoteList /> : <p className={css.noNotes}>No notes found</p>}
        </main>
      </div>

    </>
  )
}

export default App
