import React, { useEffect, useState } from "react";
import { Box, Center, Button, ButtonText, Text } from "react-native";

const MovieContainer = ({ navigation, route }) => {
    const [movieData, setMovieData] = useState(null);

    const { title, id } = route.params;

    useEffect(() => {
        // Make API call to fetch detailed movie information using the id
        // Example: fetchMovieDetails(id).then((data) => setMovieData(data));
    }, [id]);

    return (
        <Box width="100%">
            <Center py={10}>
                <Text my={10}>{title}</Text>
            </Center>
            <Button onPress={() => navigation.navigate('Movie Details', { title, id })} variant="link">
                <ButtonText>Proceed to web view</ButtonText>
            </Button>
        </Box>
    );
};

export default MovieContainer;
