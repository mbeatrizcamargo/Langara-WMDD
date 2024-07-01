import { Card } from "antd"
import RemoveCar from "../buttons/RemoveCar"
import { EditOutlined } from "@ant-design/icons"
import { useState } from "react"
import UpdateCar from "../forms/UpdateCar"

const CarCard = props => {
    const [editMode, setEditMode] = useState(false)

    const { id, year, make, model, price, personId } = props
    const styles = getStyles()

    const handleButtonClick = () => {
        setEditMode(!editMode)
    }

    return (
        <div>
            {editMode ?
                <UpdateCar id={id} year={year} make={make} model={model} price={price} personId={personId} onButtonClick={handleButtonClick} />
                : (
                    <Card
                        size='small'
                        style={styles.card}
                        type='inner'
                        title={`${year} ${make} ${model} -> $ ${price}`}
                        actions={[
                            <EditOutlined key='edit' onClick={handleButtonClick} />,
                            <RemoveCar id={id} />
                        ]}
                    >
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

export default CarCard