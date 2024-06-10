import React, { useEffect, useState } from "react";
import { Box, Center, Divider, HStack, Heading, Image, Text, VStack } from "@gluestack-ui/themed";
import { getShows } from "../../services/api";
import { StyleSheet } from "react-native";

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
        <Box style={styles.box}>
            <VStack>
                <Heading size='xl' style={styles.heading}>
                    {title}
                </Heading>
                <Center>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
                        alt={title}
                        size='2xl'
                        style={styles.image}
                    />
                </Center>
                <Text style={styles.overview}>
                    {overview}
                </Text>
                <HStack style={styles.hstack}>
                    <Text
                        size='sm'
                        style={styles.text}
                    >
                        Popularity: {popularity}
                    </Text>
                    <Divider
                        orientation='vertical'
                        style={styles.divider}
                    />
                    <Text
                        size='sm'
                        style={styles.text}
                    >
                        Release date: {release_date}
                    </Text>
                </HStack>
            </VStack>
        </Box>
    );
};

const styles = StyleSheet.create({
    box: {
        paddingLeft: 40,
        paddingRight: 40
    },
    divider: {
        marginLeft: 10,
        marginRight: 10
    },
    heading: {
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    hstack: {
        marginTop: 10,
        flexShrink: 1
    },
    image: {
        marginBottom: 20
    },
    overview: {
        marginBottom: 6
    },
    text: {
        fontWeight: 'bold'
    }
})

export default SearchResultDetails;
