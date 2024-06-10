import React, { useEffect, useState } from "react";
import { Box, Card, Center, Divider, HStack, Heading, Image, Text, VStack } from "@gluestack-ui/themed";
import { getShows } from "../../services/api";

const MovieDetails = ({ route, navigation }) => {
    const [movieDetails, setMovieDetails] = useState(null);
    const { id } = route.params;

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const data = await getShows('movie', id);
                setMovieDetails(data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (!movieDetails) {
        return (
            <Center>
                <Text>Loading...</Text>
            </Center>
        );
    }

    const { title, poster_path, popularity, release_date, overview } = movieDetails;

    return (
        <Box px={40}>
            <VStack>
                <Heading textAlign="center" size='lg' my={30}>
                    {title}
                </Heading>
                <Center>
                    <Image
                        mb="$6"
                        source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
                        alt={title}
                        size='2xl'
                    />
                </Center>
                <Text mb={5}>
                    {overview}
                </Text>
                <HStack mt={10} flexShrink={1}>
                    <Text fontWeight='bold' size='sm'>Popularity: {popularity}</Text>
                    <Divider orientation='vertical' mx={10} />
                    <Text fontWeight='bold' size='sm'>Release date: {release_date}</Text>
                </HStack>
            </VStack>
        </Box>
    );
};

export default MovieDetails;
