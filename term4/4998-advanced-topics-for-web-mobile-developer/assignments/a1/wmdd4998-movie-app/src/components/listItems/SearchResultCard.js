import { Box, Button, ButtonText, Card, HStack, Heading, Image, Text, VStack } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

const SearchResultCard = ({ typeOfShow, image, title, popularity, releaseDate, navigation, id }) => {
    return (
        <Card p="$5" borderRadius="$lg" maxWidth={360} m="$3">
            <HStack>
                <Image
                    mb="$6"
                    h={240}
                    width="$full"
                    borderRadius="$md"
                    source={{ uri: image }}
                    alt=""
                />
            </HStack>
            <Text
                fontSize="$sm"
                fontStyle="normal"
                fontFamily="$heading"
                fontWeight="$normal"
                lineHeight="$sm"
                mb="$2"
                sx={{
                    color: "$textLight700",
                    _dark: {
                        color: "$textDark200",
                    },
                }}
            >
                Popularity: {popularity}
            </Text>
            <VStack mb="$6">
                <Heading size="md" fontFamily="$heading" mb="$4">
                    {title}
                </Heading>
                <Text size="sm" fontFamily="$heading">
                    Release date: {releaseDate}
                </Text>
            </VStack>
            <Box
                flexDirection="column"
                sx={{
                    "@sm": {
                        flexDirection: "row",
                    },
                }}
            >
                <Button
                    px="$4"
                    py="$2"
                    variant="solid"
                    fontFamily="$heading"
                    borderColor="$borderLight300"
                    $dark-borderColor="$backgroundDark600"
                    sx={{
                        "@sm": {
                            flex: 1,
                        },
                    }}
                    onPress={() => navigation.navigate(`Search Details`, { id })}
                >
                    <ButtonText>
                        More Details
                    </ButtonText>
                </Button>
            </Box>
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

export default SearchResultCard;
