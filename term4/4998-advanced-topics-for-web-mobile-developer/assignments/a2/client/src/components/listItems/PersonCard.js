import { Card, Typography } from "antd";
import RemovePerson from "../buttons/RemovePerson";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import UpdatePerson from "../forms/UpdatePerson";
import CarCard from "./CarCard";
import { useQuery } from "@apollo/client";
import { GET_PEOPLE, GET_CARS } from "../../graphql/queries";
import { Link } from 'react-router-dom';

const PersonCard = (props) => {
  const [editMode, setEditMode] = useState(false);

  const { id, firstName, lastName } = props;
  const styles = getStyles();

  const { loading: peopleLoading, error: peopleError, data: peopleData } = useQuery(GET_PEOPLE);
  const { loading: carsLoading, error: carsError, data: carsData } = useQuery(GET_CARS);

  if (peopleLoading || carsLoading) return 'Loading...';
  if (peopleError) return `Error loading people data! ${peopleError.message}`;
  if (carsError) return `Error loading cars data! ${carsError.message}`;

  const handleButtonClick = () => {
    setEditMode(!editMode);
  };

  const person = peopleData.people.find(person => person.id === id);
  if (!person) return `Person with ID ${id} not found`;

  const title = `${person.firstName} ${person.lastName}`;

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
          {carsData.cars.filter(car => car.personId === id).map((car) => (
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
