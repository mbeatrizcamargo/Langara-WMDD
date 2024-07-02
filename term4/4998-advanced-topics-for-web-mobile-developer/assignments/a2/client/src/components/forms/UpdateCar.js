import { useMutation, useQuery } from "@apollo/client"
import { Button, Form, Input, Select } from "antd"
import { useEffect, useState } from "react"
import { UPDATE_CAR, GET_PEOPLE } from "../../graphql/queries"

const UpdateCar = props => {
    const { id, year, make, model, price, personId, onButtonClick } = props
    const [form] = Form.useForm()
    const [, forceUpdate] = useState()
    const [newPersonId, setNewPersonId] = useState(null)

    const { loading, error, data } = useQuery(GET_PEOPLE);

    const [updateCar] = useMutation(UPDATE_CAR, {
        onError: (error) => {
            console.error('Error updating car:', error);
        }
    })

    const handleChange = (value) => {
        setNewPersonId(value)
        console.log(`selected ${value}`)
    }
    
    useEffect(() => {
        forceUpdate()
    }, [])

    const onFinish = values => {
        const { year, make, model, price } = values
        updateCar({
            variables: {
                id,
                year: parseInt(year, 10),
                make,
                model,
                price: parseFloat(price),
                personId: newPersonId || personId
            },

        }).catch(error => {
            console.error('Error in onFinish:', error);
        })
        onButtonClick()
    }



    return (
        <Form
            name='update-car-form'
            layout='inline'
            initialValues={{ year, make, model, price, personId }}
            form={form}
            onFinish={onFinish}
        >
            <Form.Item name='year' rules={[{ required: true, message: 'please enter a year' }]}>
                <Input placeholder='Year' />
            </Form.Item>
            <Form.Item name='make' rules={[{ required: true, message: 'please enter a make' }]}>
                <Input placeholder='Make' />
            </Form.Item>
            <Form.Item name='model' rules={[{ required: true, message: 'please enter a model' }]}>
                <Input placeholder='Model' />
            </Form.Item>
            <Form.Item name='price' rules={[{ required: true, message: 'please enter a price' }]}>
                <Input placeholder='Price' />
            </Form.Item>
            <Form.Item name='personId' rules={[{ required: true, message: 'Please select a person' }]}>
                <Select
                    placeholder='Select a Person'
                    onChange={handleChange}
                    >
                    {data.people.map(({ id, firstName, lastName }) => (
                        <Select.Option label={`${firstName} ${lastName}`} value={id} key={id}>
                            {firstName} {lastName}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item shouldUpdate={true}>
                {() => (
                    <Button
                        type='primary'
                        htmlType='submit'
                        disabled={
                            (!form.isFieldTouched('year') && !form.isFieldTouched('make') && !form.isFieldTouched('model') && !form.isFieldTouched('price') && !form.isFieldTouched('person')) || form.getFieldsError().filter(({ errors }) => errors.length).length
                        }
                    >
                        Update Car
                    </Button>
                )}
            </Form.Item>
            <Form.Item>
                <Button onClick={onButtonClick}>Cancel</Button>
            </Form.Item>
        </Form>
    )
}

export default UpdateCar