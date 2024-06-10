import React, { useEffect, useState } from "react";
import { Center, Divider, HStack, Heading, Image, Text, VStack } from "@gluestack-ui/themed";
import { getShows } from "../../services/api";

const SearchResultDetails = ({ route, navigation }) => {
    const [searchResultDetails, setSearchResultDetails] = useState(null);
    const { id, typeOfShow } = route.params;

    useEffect(() => {
        const fetchSearchResultDetails = async () => {
            try {
                const data = await getShows(typeOfShow, id);
                setSearchResultDetails(data);
            } catch (error) {
                console.error('Error fetching details:', error);
            }
        };

        fetchSearchResultDetails();
    }, [id, typeOfShow]);

    if (!searchResultDetails) {
        return (
            <Center>
                <Text>Loading...</Text>
            </Center>
        );
    }

    const { title, poster_path, popularity, release_date, overview } = searchResultDetails;

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

export default SearchResultDetails;
