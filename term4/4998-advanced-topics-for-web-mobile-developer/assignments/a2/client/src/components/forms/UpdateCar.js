import { useMutation } from "@apollo/client"
import { Button, Form, Input } from "antd"
import { useEffect, useState } from "react"
import { UPDATE_CAR } from "../../graphql/queries"

const UpdateCar = props => {
    const { id, year, make, model, price, personId, onButtonClick } = props
    const [form] = Form.useForm()
    const [, forceUpdate] = useState()

    const [updateCar] = useMutation(UPDATE_CAR)

    useEffect(() => {
        forceUpdate()
    }, [])

    const onFinish = values => {
        const {year, make, model, price, personId} = values
        updateCar({
            variables: {
                id,
                year,
                make,
                model,
                price,
                personId
            }
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
            <Form.Item name='personId' rules={[{ required: true, message: 'please enter a personId' }]}>
                <Input placeholder='Person' />
            </Form.Item>
            <Form.Item shouldUpdate={true}>
                {() => (
                    <Button
                        type='primary'
                        htmlType='submit'
                        disabled={
                            (!form.isFieldTouched('year') && !form.isFieldTouched('make') && !form.isFieldTouched('model') && !form.isFieldTouched('price') && !form.isFieldTouched('personId')) || form.getFieldsError().filter(({ errors }) => errors.length).length
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