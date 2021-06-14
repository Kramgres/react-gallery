import Card from "./Card/Card";
import styles from './Catalog.module.scss';

const Catalog = (props) => {
    let cardsElements = props.catalog.cards.map(c => (<Card key={c.albumId}
                                                            title={c.title}
                                                            imageUrl={c.imageUrl}
                                                            imageTitle={c.imageTitle}
                                                            imagesCount={c.imagesCount}
                                                            albumId={c.albumId}/>));
    return (
        <div className='container'>
            <div className={styles.catalog}>
                <h1 className={styles.catalogTitle}>Альбомы пользователя</h1>
                <div className={styles.catalogCards}>
                    {cardsElements}
                </div>
            </div>
        </div>
    )
}

export default Catalog;