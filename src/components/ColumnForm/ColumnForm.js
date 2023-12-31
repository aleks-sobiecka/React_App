import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';


const ColumnForm = props => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        //props.action({ title: title, icon: icon });
        //dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
        dispatch(addColumn({ listId: props.listId, title, icon }));
        setTitle('');
        setIcon('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <span>Title: </span><TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <span>Icon: </span><TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button className={styles.button}>Add column</Button>
        </form>
    );
};

export default ColumnForm;