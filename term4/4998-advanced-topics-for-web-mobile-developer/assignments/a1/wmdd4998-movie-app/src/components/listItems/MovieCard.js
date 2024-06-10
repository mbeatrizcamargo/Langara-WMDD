import { Box, Button, ButtonText, Card, HStack, Heading, Image, Text, VStack } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

const MovieCard = ({ image, title, popularity, releaseDate, url, navigation, id }) => {
    return (
        <Card p="$5" m="0" w='100%' >
            <HStack w='100%' space='md'>
                    <Image
                        mb="$6"
                        size='xl'
                        source={{ uri: image }}
                        alt=""
                    />
                <VStack flexShrink={1}>
                    <Heading size="sm" fontFamily="$heading" mb="$1">
                        {title}
                    </Heading>
                    <Text
                        fontSize="$sm"
                        fontStyle="normal"
                        fontFamily="$heading"
                        fontWeight="$normal"
                        lineHeight="$sm"
                        mb="$1"
                        sx={{
                            color: "$textLight700",
                            _dark: {
                                color: "$textDark200",
                            },
                        }}
                    >
                        Popularity: {popularity}
                    </Text>
                    <Text size="sm" fontFamily="$heading" mB="$1">
                        Release date: {releaseDate}
                    </Text>
                    <Button
                        px="$4"
                        py="$2"
                        variant="solid"
                        fontFamily="$heading"
                        borderColor="$borderLight300"
                        $dark-borderColor="$backgroundDark600"
                        bg='#00BFFF'
                        width='90%'
                        my="$1"
                        sx={{
                            "@sm": {
                                flex: 1,
                                display: 'inline'
                            },
                            ':active': {
                                backgroundColor: '#009fd4'
                            }
                        }}
                        onPress={() => navigation.navigate('Movie Details', { id })}
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
    image: {
        padding: 0,
    },
    text: {
        marginTop: 10,
    },
});

export default MovieCard;
