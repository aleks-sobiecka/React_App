import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = props => {

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.cardId));
    }

    return (
        <li className={styles.card}>
            {props.title}
            <form onSubmit={handleSubmit}>
                <button className={clsx(styles.star, props.isActive && styles.favorite)}>
                <span className='icon +  fa fa-star-o' />
                </button>
            </form>
        </li>
    );
};

export default Card;