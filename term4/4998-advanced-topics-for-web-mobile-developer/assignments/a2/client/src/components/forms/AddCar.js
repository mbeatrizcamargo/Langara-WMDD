import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, Select, Typography } from "antd";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ADD_CAR, GET_CARS, GET_PEOPLE, GET_PERSON_WITH_CARS } from "../../graphql/queries";
import { map } from 'lodash';

const AddCar = () => {
    const styles = getStyles();

    const [id] = useState(uuidv4());
    const [form] = Form.useForm();
    const [, forceUpdate] = useState();

    const [addCar] = useMutation(ADD_CAR);
    const { loading, error, data } = useQuery(GET_PEOPLE);

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = values => {
        const { year, make, model, price, personId } = values;

        addCar({
            variables: {
                id,
                year: parseInt(year, 10),  // Convert year to integer
                make,
                model,
                price: parseFloat(price),  // Convert price to float
                personId
            },
            update: (cache, { data: { addCar } }) => {
                // Update the list of cars
                const data = cache.readQuery({ query: GET_CARS });
                if (data && data.cars) {
                    cache.writeQuery({
                        query: GET_CARS,
                        data: {
                            ...data,
                            cars: [...data.cars, addCar]
                        }
                    });
                }

                // Update the person's list of cars
                const personData = cache.readQuery({ 
                    query: GET_PERSON_WITH_CARS, 
                    variables: { id: personId } 
                });
                if (personData && personData.personWithCars) {
                    cache.writeQuery({
                        query: GET_PERSON_WITH_CARS,
                        variables: { id: personId },
                        data: {
                            ...personData,
                            personWithCars: {
                                ...personData.personWithCars,
                                cars: [...personData.personWithCars.cars, addCar]
                            }
                        }
                    });
                }
            }
        });

        form.resetFields();
    };

    const personOptions = map(data?.people, person => ({
        value: person.id,
        label: `${person.firstName} ${person.lastName}`
    })) || [];

    return (
        <>
            <Typography style={styles.heading}>Add Car</Typography>
            <Form
                name='add-car-form'
                layout='inline'
                size='large'
                style={styles.form}
                form={form}
                onFinish={onFinish}
            >
                <Form.Item
                    name='year'
                    label='Year'
                    style={styles.formItem}
                    rules={[{ required: true, message: 'Please enter a year' }]}
                >
                    <Input placeholder='Year' style={styles.formInput} />
                </Form.Item>
                <Form.Item
                    name='make'
                    label='Make'
                    style={styles.formItem}
                    rules={[{ required: true, message: 'Please enter a make' }]}
                >
                    <Input placeholder='Make' style={styles.formInput} />
                </Form.Item>
                <Form.Item
                    name='model'
                    label='Model'
                    style={styles.formItem}
                    rules={[{ required: true, message: 'Please enter a model' }]}
                >
                    <Input placeholder='Model' style={styles.formInput} />
                </Form.Item>
                <Form.Item
                    name='price'
                    label='Price'
                    style={styles.formItem}
                    rules={[{ required: true, message: 'Please enter a price' }]}
                >
                    <Input prefix="$" style={styles.formInput} />
                </Form.Item>
                <Form.Item
                    name='personId'
                    label='Person'
                    style={{ width: '15%' }}
                    rules={[{ required: true, message: 'Please select a person' }]}
                >
                    <Select
                        options={personOptions}
                        placeholder='Select a Person'
                        style={styles.formInput}
                    />
                </Form.Item>
                <Form.Item shouldUpdate={true}>
                    {() => (
                        <Button
                            type='primary'
                            htmlType='submit'
                            disabled={
                                !form.isFieldsTouched(true) ||
                                form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
                        >
                            Add Car
                        </Button>
                    )}
                </Form.Item>
            </Form>
        </>
    );
};

const getStyles = () => ({
    heading: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    form: {
        marginBottom: '40px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        width: '100%'
    },
    formItem: {
        flexShrink: 2,
        marginRight: '5px',
    },
    formInput: {}
});

export default AddCar;
