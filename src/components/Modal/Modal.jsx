import styles from './Modal.module.scss';

const Modal = (props) => {
    if (!props.show) {
        return null;
    }

    return (
        <div className={styles.modal} onClick={props.onClose}>
            <div className={styles.modalContainer}>
                <button onClick={props.onClose} className={styles.modalClose}>X</button>
                <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                    <div className={styles.modalHeader}>
                        <div className={styles.modalTitle}>{props.title}</div>
                    </div>
                    <div className={styles.modalBody}>{props.children}</div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
