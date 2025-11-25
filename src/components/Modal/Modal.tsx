import { createPortal } from 'react-dom'
import css from './Modal.module.css'
import NoteForm from '../NoteForm/NoteForm'

interface ModalProps {
    onClose: (value: boolean) => void
}


function Modal({onClose}: ModalProps) {
    return createPortal(
        <div
            className={css.backdrop}
            role="dialog"
            aria-modal="true"
        >
            <div className={css.modal}>
                <NoteForm onClose={onClose}/>
            </div>
        </div>
        , document.body
    )
}

export default Modal