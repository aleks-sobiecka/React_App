import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
import { useSelector } from 'react-redux';
import { getListById } from '../../redux/store';
import { getColumnsByList } from '../../redux/store';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';


const List = () => {

  //stwórz nowy stan (“zmienną”) o wartości startowej równej tablicy z kolumnami
  //przypisz referencję do jej wartości pod stałą columns
  //funkcję do zmiany wartości tego stanu przypisz do stałej setColumns
  /*const [columns, setColumns] = useState([
    {
      id: 1,
      title: 'Books',
      icon: 'book',
      cards: [
        { id: 1, title: 'This is Going to Hurt' },
        { id: 2, title: 'Interpreter of Maladies' }
      ]
    },
    {
      id: 2,
      title: 'Movies',
      icon: 'film',
      cards: [
        { id: 1, title: 'Harry Potter' },
        { id: 2, title: 'Star Wars' }
      ]
    },
    {
      id: 3,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        { id: 1, title: 'The Witcher' },
        { id: 2, title: 'Skyrim' }
      ]
    }
  ]);


  const addColumn = newColumn => {
		setColumns([...columns, { id: shortid(), title: newColumn.title, icon: newColumn.icon, cards: [] }]);
  };

  const addCard = (newCard, columnId) => {
    const columnsUpdated = columns.map(column => {
      if(column.id === columnId)
        return { ...column, cards: [...column.cards, { id: shortid(), title: newCard.title }]}
      else
        return column
    })
    setColumns(columnsUpdated);
  };*/

  const { listId } = useParams();

  //const columns = useSelector(state => state.columns);
  //const columns = useSelector(getAllColumns);
  const columns = useSelector(state => getColumnsByList(state, listId));
  const listData = useSelector(state => getListById(state, listId));

  if(!listData) return <Navigate to="/" />
    
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map(column => <Column key={column.id} {...column} />)}
      </section>
      <ColumnForm listId={listId}/>
    </div>
  );
};

  export default List;