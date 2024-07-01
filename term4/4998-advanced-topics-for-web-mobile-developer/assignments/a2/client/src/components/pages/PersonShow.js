import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Card, Typography } from 'antd';
import { GET_PERSON_WITH_CARS } from '../../graphql/queries';
import { useState } from 'react';

const PersonShow = () => {
  const { personId } = useParams();

  const styles = getStyles();

  const { loading, error, data } = useQuery(GET_PERSON_WITH_CARS, {
    variables: { id: personId }
  });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <Card
        style={styles.card}
        title={`${data.personWithCars.firstName} ${data.personWithCars.lastName}`}
      >
        {data.personWithCars.cars.map((car) => (
          <div key={car.id}>
            <Card type='inner' style={styles.innerCard}>
                <Typography>{`${car.year} ${car.make} ${car.model} -> $ ${Number(car.price).toLocaleString()}`}</Typography>
            </Card>
          </div>
        ))}
      </Card>
    </div>
  );
};

const getStyles = () => ({
  card: {
    border: '1px solid lightgrey',
    borderRadius: '3px',
    width: '100%'
  },
  innerCard: {
    margin: '10px'
  }
});

export default PersonShow;
