import { Button, ButtonText, Card, HStack, Heading, Image, Text, VStack } from "@gluestack-ui/themed";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from "react-native";

const SearchResultCard = ({ typeOfShow, image, title, popularity, releaseDate, id }) => {
    const navigation = useNavigation();

    return (
        <Card style={styles.card}>
            <HStack space='md' style={styles.hstack}>
                <Image
                    size='xl'
                    source={{ uri: image }}
                    alt=""
                />
                <VStack style={styles.vstack}>
                    <Heading size="md" fontFamily="$heading" styles={styles.heading}>
                        {title}
                    </Heading>
                    <Text
                        style={styles.text}
                        fontSize="$sm"
                        fontFamily="$heading"
                        lineHeight="$sm"
                    >
                        Popularity: {popularity}
                    </Text>
                    <Text
                        style={styles.text}
                        size="sm"
                        fontFamily="$heading"
                    >
                        Release date: {releaseDate}
                    </Text>
                    <Button
                        style={styles.button}
                        variant="solid"
                        fontFamily="$heading"
                        borderColor="$borderLight300"
                        $dark-borderColor="$backgroundDark600"
                        onPress={() => navigation.navigate('Search Details', { id, typeOfShow })}
                    >
                        <ButtonText>
                            More Details
                        </ButtonText>
                    </Button>
                </VStack>
            </HStack>
        </Card>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00BFFF',
        width: 180,
        marginTop: 1,
        marginBottom: 1,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 4,
        paddingRight: 4
    },
    card: {
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        margin: 0,
        width: '100%'
    },
    heading: {
        marginBottom: 1
    },
    hstack: {
        width: '100%'
    },
    vstack: {
        flexShrink: 1
    },
    text: {
        marginBottom: 1
    },
});

export default SearchResultCard;
