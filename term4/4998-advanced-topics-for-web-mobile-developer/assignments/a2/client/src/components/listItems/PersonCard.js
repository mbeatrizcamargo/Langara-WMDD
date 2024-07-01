import { Card, Typography } from "antd";
import RemovePerson from "../buttons/RemovePerson";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import UpdatePerson from "../forms/UpdatePerson";
import CarCard from "./CarCard";
import { useQuery } from "@apollo/client";
import { GET_PERSON_WITH_CARS } from "../../graphql/queries";
import { Link } from 'react-router-dom';

const PersonCard = props => {
  const [editMode, setEditMode] = useState(false);

  const { id, firstName, lastName } = props;
  const styles = getStyles();

  const { loading, error, data } = useQuery(GET_PERSON_WITH_CARS, {
    variables: { id }
  });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const handleButtonClick = () => {
    setEditMode(!editMode);
  };

  const title = `${firstName} ${lastName}`;

  return (
    <div>
      {editMode ? (
        <UpdatePerson id={id} firstName={firstName} lastName={lastName} onButtonClick={handleButtonClick} />
      ) : (
        <Card
          size='small'
          style={styles.card}
          title={title}
          actions={[
            <EditOutlined key='edit' onClick={handleButtonClick} />,
            <RemovePerson id={id} />
          ]}
        >
          {data.personWithCars.cars.map((car) => (
            <CarCard key={car.id} id={car.id} year={car.year} make={car.make} model={car.model} price={car.price} />
          ))}
          <Link to={`/people/${id}`} id={id}>
            Learn More
          </Link>
        </Card>
      )}
    </div>
  );
};

const getStyles = () => ({
  card: {
    border: '1px solid lightgrey',
    borderRadius: '3px',
    width: '100%'
  },
});

export default PersonCard;
