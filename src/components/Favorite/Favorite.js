import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';

const Favorite = () => {

    const favoriteCards = useSelector(state => getFavoriteCards(state));

    //if(favoriteCards.length === 0) return <Navigate to="/" />

    if(favoriteCards.length === 0) 
        return (
            <section className={styles.favorite}>
            <div className={styles.header}>
                <PageTitle>favorite</PageTitle>
            </div>
            <div className={styles.column}>
                No cards added to favorite
            </div>
        </section>
    )

    return (
        <section className={styles.favorite}>
            <div className={styles.header}>
                <PageTitle>favorite</PageTitle>
            </div>
            <div className={styles.column}>
                <ul className={styles.cards}>
                    {favoriteCards.map(card => <Card key={card.id} title={card.title} cardId={card.id} isActive={card.isFavorite}/>)}
                </ul>
            </div>
        </section>)
}

export default Favorite;