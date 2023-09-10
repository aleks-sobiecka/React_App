import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { removeCard } from '../../redux/cardsRedux';

const Card = props => {

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.cardId));
    }

    const handleSubmitTrash = e => {
        e.preventDefault();
        dispatch(removeCard(props.cardId));
    }

    return (
        <li className={styles.card}>
            {props.title}
            <div>
                <form onSubmit={handleSubmit}>
                    <button className={clsx(styles.star, props.isActive && styles.favorite)}>
                        <span className='icon +  fa fa-star-o' />
                    </button>
                </form>
                <form onSubmit={handleSubmitTrash}>
                    <button className={styles.trash}>
                        <span className='icon +  fa fa-trash' />
                    </button>
                </form>
            </div>
        </li>
    );
};

export default Card;