import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const CardForm = props => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        //props.action({ title: title }, props.columnId, props.action );
        dispatch({ type: 'ADD_CARD', payload: { columnId: props.columnId, title }});
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
    );
};

export default CardForm;