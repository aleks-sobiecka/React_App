import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {

    const dispatch = useDispatch();

    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(updateSearchString(''));
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        //dispatch({type: 'UPDATE_SEARCHSTRING', payload: search });
        dispatch(updateSearchString( search ));
        setSearch('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder="Search..." value={ search } onChange={e => setSearch(e.target.value)}/>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;