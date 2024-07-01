import { DeleteOutlined } from '@ant-design/icons'
import { GET_CARS, REMOVE_CAR } from '../../graphql/queries'
import { useMutation } from '@apollo/client'
import filter from 'lodash.filter'

const RemoveCar = ({ id }) => {
    const [removeCar] = useMutation(REMOVE_CAR, {
        update(cache, { data: { removeCar } }) {
            const { cars } = cache.readQuery({ query: GET_CARS })

            cache.writeQuery({
                query: GET_CARS,
                data: {
                    cars: filter(cars, c => {
                        return c.id !== removeCar.id //return the ones that don't match the id that needs to be removed
                    })
                }
            })
        }
    })

    const handleButtonClick = () => {
        let result = window.confirm('Are you sure you want to delete this car?')

        console.log('result', result)

        if (result) {
            removeCar({
                variables: {
                    id
                }
            })
        }
    }

    return (
        <DeleteOutlined key='delete' style={{ color: 'red' }} onClick={handleButtonClick} />
    )
}

export default RemoveCar