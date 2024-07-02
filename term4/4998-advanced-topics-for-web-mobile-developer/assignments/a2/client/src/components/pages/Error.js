import { Typography } from "antd";
import { useRouteError } from "react-router-dom";

function Error() {
    const styles = getStyles()
    const error = useRouteError();

    return (
        <>
            <Typography style={styles.title}>Oops!</Typography>
            <Typography style={styles.text}>Sorry, couldn't find this page</Typography>
            <Typography>{error.statusText || error.message}</Typography>
        </>
    );
}

const getStyles = () => ({
    title: {
        fontSize: '50px',
        margin: '50px'
    },
    text: {
        fontSize: '20px',
        marginBottom: '20px'
    }
})

export default Error;