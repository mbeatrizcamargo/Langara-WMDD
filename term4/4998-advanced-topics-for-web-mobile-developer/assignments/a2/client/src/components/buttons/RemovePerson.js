import { DeleteOutlined } from '@ant-design/icons'
import { GET_PEOPLE, REMOVE_PERSON } from '../../graphql/queries'
import { useMutation } from '@apollo/client'
import filter from 'lodash.filter'

const RemovePerson = ({ id }) => {
    const [removePerson] = useMutation(REMOVE_PERSON, {
        update(cache, { data: { removePerson } }) {
            const { people } = cache.readQuery({ query: GET_PEOPLE })

            cache.writeQuery({
                query: GET_PEOPLE,
                data: {
                    people: filter(people, c => {
                        return c.id !== removePerson.id //return the ones that don't match the id that needs to be removed
                    })
                }
            })
        }
    })

    const handleButtonClick = () => {
        let result = window.confirm('Are you sure you want to delete this person?')

        console.log('result', result)

        if (result) {
            removePerson({
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

export default RemovePerson