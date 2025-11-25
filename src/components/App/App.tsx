import { useState } from 'react'
import css from './App.module.css'
import SearchBox from '../SearchBox/SearchBox'
import Pagination from '../Pagination/Pagination'
import { fetchFunc } from '../../fetchFunc/fetchFunc'
import NoteList from '../NoteList/NoteList'
import Modal from '../Modal/Modal'
import { useQuery } from '@tanstack/react-query'


function App() {
  const [page, setPage] = useState<number>(1);
  const [openForm, setOpenForm] = useState<boolean>(false)
  const [topic, setTopic] = useState<string>('car')

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['notes', topic, page],
    queryFn: () => fetchFunc(topic),
  });



  return (
    <>
      <div className={css.app}>
        <header className={css.toolbar}>
          <SearchBox />
          {data && data.totalPages && data.totalPages > 0 && (
            <Pagination pages={data.totalPages} changePage={setPage} currentPage={page} />
)}
          <button className={css.button} onClick={() => setOpenForm(true)}>Create note</button>
        </header>
        <main>
          {openForm && (<Modal onClose={setOpenForm} />)}
          {data && data.notes && data.notes.length > 0 && <NoteList list={data.notes} />}

        </main>
      </div>
    </>
  )
}

export default App
