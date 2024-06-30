import { DeleteOutlined } from '@ant-design/icons'
import { GET_CONTACTS, REMOVE_CONTACT } from '../../graphql/queries'
import { useMutation } from '@apollo/client'
import filter from 'lodash.filter'

const RemoveContact = ({ id }) => {
    const [removeContact] = useMutation(REMOVE_CONTACT, {
        update(cache, { data: { removeContact } }) {
            const { contacts } = cache.readQuery({ query: GET_CONTACTS })

            cache.writeQuery({
                query: GET_CONTACTS,
                data: {
                    contacts: filter(contacts, c => {
                        return c.id !== removeContact.id //return the ones that don't match the id that needs to be removed
                    })
                }
            })
        }
    })

    const handleButtonClick = () => {
        let result = window.confirm('Are you sure you want to delete this contact?')

        console.log('result', result)

        if (result) {
            removeContact({
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

export default RemoveContact