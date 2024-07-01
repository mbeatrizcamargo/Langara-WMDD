import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, Select } from "antd";
import { UPDATE_CAR, GET_PEOPLE, GET_PERSON_WITH_CARS, GET_CARS } from "../../graphql/queries";
import { map } from 'lodash';

const UpdateCar = ({ id, year, make, model, price, personId: initialPersonId, onButtonClick }) => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState();

    const [updateCar] = useMutation(UPDATE_CAR);
    const { loading, error, data } = useQuery(GET_PEOPLE, {
        variables: {id}
    });

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = values => {
        const { year, make, model, price, personId } = values;

        updateCar({
            variables: {
                id,
                year: parseInt(year, 10),
                make,
                model,
                price: parseFloat(price),
                personId
            },
            update: (cache, { data: { updateCar } }) => {
                // Update the old person's list of cars
                const oldPersonData = cache.readQuery({
                    query: GET_PERSON_WITH_CARS,
                    variables: { id: initialPersonId }
                });
                if (oldPersonData && oldPersonData.personWithCars) {
                    cache.writeQuery({
                        query: GET_PERSON_WITH_CARS,
                        variables: { id: initialPersonId },
                        data: {
                            ...oldPersonData,
                            personWithCars: {
                                ...oldPersonData.personWithCars,
                                cars: oldPersonData.personWithCars.cars.filter(car => car.id !== id)
                            }
                        }
                    });
                }

                // Update the new person's list of cars
                const newPersonData = cache.readQuery({
                    query: GET_PERSON_WITH_CARS,
                    variables: { id: personId }
                });
                if (newPersonData && newPersonData.personWithCars) {
                    cache.writeQuery({
                        query: GET_PERSON_WITH_CARS,
                        variables: { id: personId },
                        data: {
                            ...newPersonData,
                            personWithCars: {
                                ...newPersonData.personWithCars,
                                cars: [...newPersonData.personWithCars.cars, updateCar]
                            }
                        }
                    });
                }

                // Update the list of cars
                const carsData = cache.readQuery({ query: GET_CARS });
                if (carsData && carsData.cars) {
                    cache.writeQuery({
                        query: GET_CARS,
                        data: {
                            cars: carsData.cars.map(car => car.id === id ? updateCar : car)
                        }
                    });
                }
            }
        });
        onButtonClick();
    };


    const personOptions = map(data?.people, person => ({
        value: person.id,
        label: `${person.firstName} ${person.lastName}`
    })) || [];

    return (
        <Form
            name='update-car-form'
            layout='inline'
            initialValues={{ year, make, model, price, personId: initialPersonId }}
            form={form}
            onFinish={onFinish}
        >
            <Form.Item name='year' rules={[{ required: true, message: 'Please enter a year' }]}>
                <Input placeholder='Year' />
            </Form.Item>
            <Form.Item name='make' rules={[{ required: true, message: 'Please enter a make' }]}>
                <Input placeholder='Make' />
            </Form.Item>
            <Form.Item name='model' rules={[{ required: true, message: 'Please enter a model' }]}>
                <Input placeholder='Model' />
            </Form.Item>
            <Form.Item name='price' rules={[{ required: true, message: 'Please enter a price' }]}>
                <Input placeholder='Price' />
            </Form.Item>
            <Form.Item name='personId' rules={[{ required: true, message: 'Please select a person' }]}>
                <Select
                    options={personOptions}
                    placeholder='Select a Person'
                />
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
    );
};

export default UpdateCar;
