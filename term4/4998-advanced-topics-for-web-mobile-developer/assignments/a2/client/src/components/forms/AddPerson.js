import { useMutation } from "@apollo/client"
import { Button, Form, Input, Typography } from "antd"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { ADD_PERSON, GET_PEOPLE } from "../../graphql/queries"

const AddPerson = () => {
    const styles = getStyles()

    const [id] = useState(uuidv4())
    const [form] = Form.useForm()
    const [, forceUpdate] = useState()

    const [addPerson] = useMutation(ADD_PERSON)

    useEffect(() => {
        forceUpdate({})
    }, [])

    const onFinish = values => {
        const {firstName, lastName} = values

        console.log('values', values)

        addPerson({
            variables: {
                id, firstName, lastName
            },

            update: (cache, {data: {addPerson}}) => {
                const data = cache.readQuery({query: GET_PEOPLE})
                cache.writeQuery({
                    query: GET_PEOPLE,
                    data: {
                        ...data,
                        people: [...data.people, addPerson]
                    }
                })
            }
        })
    }

    return (
        <>
        <Typography style={styles.heading}>Add Person</Typography>
        <Form
            name='add-person-form'
            layout='inline'
            size='large'
            style={{ marginBottom: '40px' }}
            form={form}
            onFinish={onFinish}
        >
            <Form.Item
                name='firstName'
                label='First name'
                rules={[{required: true, message: 'Please enter a first name'}]}
            >
                <Input placeholder='First Name'/>
            </Form.Item>
            <Form.Item
                name='lastName'
                label='Last name'
                rules={[{required: true, message: 'Please enter a last name'}]}
            >
                <Input placeholder='Last Name'/>
            </Form.Item>
            <Form.Item
                shouldUpdate={true}
            >
                {() => (
                    <Button
                        type='primary'
                        htmlType='submit'
                        disabled={
                            !form.isFieldsTouched(true) ||
                            form.getFieldsError().filter(({errors}) => errors.length).length
                        }
                    >
                        Add Person
                    </Button>
                )}
            </Form.Item>
        </Form>
        </>
    )
}

const getStyles = () => ({
    heading: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '20px',
    }
})

export default AddPerson