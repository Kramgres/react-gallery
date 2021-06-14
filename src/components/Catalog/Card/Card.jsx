import styles from './Card.module.scss';
import {NavLink} from "react-router-dom";

const Card = (props) => {
    console.log(props);
    return(
        <NavLink to={'/album/' + props.albumId} className={styles.card}>
            <div className={styles.cardImg}>
                <img src={props.imageUrl} alt={props.imageTitle}/>
            </div>
            <div className={styles.cardBody}>
                <div className={styles.cardTitle}>{props.title}</div>
                <div className={styles.cardImagesCount}>Изображений: {props.imagesCount}</div>
            </div>
        </NavLink>
    )
}

export default Card;