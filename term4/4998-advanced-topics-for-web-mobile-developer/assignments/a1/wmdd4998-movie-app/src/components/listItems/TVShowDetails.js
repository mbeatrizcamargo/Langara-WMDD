import React, { useEffect, useState } from "react";
import { Box, Center, Divider, HStack, Heading, Image, Text, VStack } from "@gluestack-ui/themed";
import { getShows } from "../../services/api";
import { StyleSheet } from "react-native";

const TVShowDetails = ({ route, navigation }) => {
    const [tvShowDetails, setTVShowDetails] = useState(null);
    const { id } = route.params;

    useEffect(() => {
        const fetchTVShowDetails = async () => {
            try {
                const data = await getShows('tv', id);
                setTVShowDetails(data);
            } catch (error) {
                console.error('Error fetching tv show details:', error);
            }
        };

        fetchTVShowDetails();
    }, [id]);

    if (!tvShowDetails) {
        return (
            <Center>
                <Text>Loading...</Text>
            </Center>
        );
    }

    const { original_name, poster_path, popularity, first_air_date, overview } = tvShowDetails;

    return (
        <Box style={styles.box}>
            <VStack>
                <Heading size='xl' style={styles.heading}>
                    {original_name}
                </Heading>
                <Center>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
                        alt={original_name}
                        size='2xl'
                        style={styles.image}
                    />
                </Center>
                <Text style={styles.overview}>
                    {overview}
                </Text>
                <HStack style={styles.hstack}>
                    <Text size='sm' style={styles.text}>
                        Popularity: {popularity}
                    </Text>
                    <Divider orientation='vertical' style={styles.divider} />
                    <Text size='sm' style={styles.text}>
                        Release date: {first_air_date}
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

export default TVShowDetails;
