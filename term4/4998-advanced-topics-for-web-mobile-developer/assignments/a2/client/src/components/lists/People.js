import { List } from 'antd'
import PersonCard from '../listItems/PersonCard'
import { useQuery } from '@apollo/client'
import { GET_PEOPLE } from '../../graphql/queries'

const People = () => {
    const styles = getStyles()

    const { loading, error, data } = useQuery(GET_PEOPLE)

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    console.log('data', data)

    return (
        <List style={styles.list} grid={{ gutter: 20, column: 1 }}>
            {data.people.map(({ id, firstName, lastName }) => (
                <List.Item style={styles.listItem} key={id}>
                    <PersonCard id={id} firstName={firstName} lastName={lastName} />
                </List.Item>
            ))}
        </List>
    )
}

const getStyles = () => ({
    list: {
        width: '100%'
    },
    listItem: {
        marginBottom: '12px'
    }
})

export default People