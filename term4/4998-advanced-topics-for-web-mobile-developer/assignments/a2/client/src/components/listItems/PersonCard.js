import { Card } from "antd"
import RemovePerson from "../buttons/RemovePerson"
import { EditOutlined } from "@ant-design/icons"
import { useState } from "react"
import UpdatePerson from "../forms/UpdatePerson"

const PersonCard = props => {
    const [editMode, setEditMode] = useState(false)

    const { id, firstName, lastName } = props
    const styles = getStyles()

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