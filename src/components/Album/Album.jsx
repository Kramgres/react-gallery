import styles from './Album.module.scss'
import {NavLink} from "react-router-dom";
import Modal from "../Modal/Modal";
import {useState} from "react";
import Carousel from "../Carousel/Carousel";

const Album = (props) => {
    const [show, setShow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    function onClickImage(n){
        setShow(true);
        console.log(n);
        setCurrentIndex(n);
    }

    return (
        <div className='container'>
            <NavLink className='linkBack' to={'/'}>Каталог</NavLink>
            <div className={styles.album}>
                <h1 className={styles.albumTitle}>Изображения альбома</h1>
                <ol className={styles.albumImages}>
                    {props.album.images.map((i, n) => (<li key={i.id} onClick={() => onClickImage(n)} className={styles.albumImage}>{i.title} ({i.url})</li>))}
                </ol>
                <Modal title="Просмотр изображений" onClose={() => setShow(false)} show={show}>
                    <div>
                        <Carousel currentIndex={currentIndex}>
                            {props.album.images.map(image => (<img key={image.id} src={image.url} alt={image.title}/>))}
                        </Carousel>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Album;