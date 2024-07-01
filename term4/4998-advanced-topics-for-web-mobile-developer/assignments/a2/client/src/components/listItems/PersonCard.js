import { Card, Typography } from "antd"
import RemovePerson from "../buttons/RemovePerson"
import { EditOutlined } from "@ant-design/icons"
import { useState } from "react"
import UpdatePerson from "../forms/UpdatePerson"
import CarCard from "./CarCard"
import { useQuery } from "@apollo/client"
import { GET_PERSON_WITH_CARS } from "../../graphql/queries"

const PersonCard = props => {
    const [editMode, setEditMode] = useState(false)

    const { id, firstName, lastName } = props
    const styles = getStyles()

    const { loading, error, data } = useQuery(GET_PERSON_WITH_CARS, {
        variables: { id }
    })
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    // console.log('data', data)

    const handleButtonClick = () => {
        setEditMode(!editMode)
    }

    return (
        <div>
            {editMode ?
                <UpdatePerson id={id} firstName={firstName} lastName={lastName} onButtonClick={handleButtonClick} />
                : (
                    <Card
                        size='small'
                        style={styles.card}
                        actions={[
                            <EditOutlined key='edit' onClick={handleButtonClick} />,
                            <RemovePerson id={id} />
                        ]}
                    >

                        {firstName} {lastName}
                        {data.personWithCars.cars.map((car) => (
                            <CarCard key={car.id} id={car.jd} year={car.year} make={car.make} model={car.model} price={car.price} />
                        ))}
                    </Card>

                )}
        </div>
    )
}

const getStyles = () => ({
    card: {
        border: '1px solid lightgrey',
        borderRadius: '3px',
        width: '100%'
    }
})

export default PersonCard