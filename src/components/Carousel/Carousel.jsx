import styles from './Carousel.module.scss'
import {useEffect, useState} from "react";

const Carousel = (props) => {
    const {children} = props;
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    useEffect(() => {
        setLength(children.length)
        if (props.currentIndex >= 0 && props.currentIndex < length) {
            setCurrentIndex(props.currentIndex);
        }

    }, [children])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselWrapper}>
                {
                    currentIndex > 0 &&
                    <button onClick={prev} className={styles.leftArrow}>
                        &lt;
                    </button>
                }

                <div className={styles.carouselContentWrapper}>
                    <div className={styles.carouselContent} style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                        {children}
                    </div>
                </div>
                {
                    currentIndex < (length - 1) &&
                    <button onClick={next} className={styles.rightArrow}>
                        &gt;
                    </button>
                }

            </div>
        </div>
    )
}

export default Carousel;