import React, { useEffect, useState } from "react";
import { Center, Divider, HStack, Heading, Image, Text, VStack } from "@gluestack-ui/themed";
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
        <Center>
            <VStack>
                <Heading>
                    {title}
                </Heading>
                <Image
                    mb="$6"
                    h={240}
                    width="$full"
                    borderRadius="$md"
                    source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
                    alt={title}
                />
                <Text>
                    {overview}
                </Text>
                <HStack>
                    <Text>Popularity: {popularity}</Text>
                    <Divider orientation='vertical' mx={2} />
                    <Text>Release date: {release_date}</Text>
                </HStack>
            </VStack>
        </Center>
    );
};

export default MovieDetails;
