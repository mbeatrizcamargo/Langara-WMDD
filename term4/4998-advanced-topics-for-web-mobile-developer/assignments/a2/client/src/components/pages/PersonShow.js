import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import { List, Typography } from 'antd';
import { GET_PERSON_WITH_CARS } from '../../graphql/queries';

const PersonShow = () => {
  const { personId } = useParams();
  const styles = getStyles();

  const { loading, error, data } = useQuery(GET_PERSON_WITH_CARS, {
    variables: { id: personId }
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { firstName, lastName, cars } = data.personWithCars;
  const title = `${firstName} ${lastName}`;

  return (
    <div>
      <Typography style={styles.title}>{title}</Typography>
      <List>
      {cars.map((car) => (
          <List.Item style={styles.item} key={car.id}>{`${car.year} ${car.make} ${car.model} -> $ ${Number(car.price).toLocaleString()}`}</List.Item>

      ))}
      </List>
      <Link to={`/`}>
        Go Back Home
      </Link>
    </div>
  );
};

const getStyles = () => ({
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    margin: '20px 0'
  },
  item: {
    border: 'none',
    fontSize: '20px',
    margin: '15px 0',
  },
});

export default PersonShow;
