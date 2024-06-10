import { Box, FormControl, FormControlLabelText, HStack, Input, InputField, VStack, Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, Icon, ChevronDownIcon, Center, Button, ButtonIcon, ButtonText, SearchIcon, Text } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const SearchForm = ({ handleSubmit }) => {
    const [keyword, setKeyword] = useState("");
    const [typeOfShow, setTypeOfShow] = useState("movie");
    const [error, setError] = useState("");

    const onSubmit = () => {
        if (!keyword.trim()) {
            setError("Please enter a keyword to search.");
            return;
        }
        setError("");
        handleSubmit(typeOfShow, keyword);
    };

    return (
        <SafeAreaView>
            <Box style={styles.box}>
                <VStack space={2} style={styles.vstack}>
                    <FormControl isRequired>
                        <FormControl.Label fontSize='sm'>
                            <FormControlLabelText>Search Movie/TV Show Name</FormControlLabelText>
                        </FormControl.Label>
                        <Input>
                            <InputField
                                placeholder='i.e. James Bond, CSI'
                                value={keyword}
                                onChangeText={(text) => {
                                    setKeyword(text);
                                    if (error) setError("")
                                }}
                            />
                        </Input>
                    </FormControl>
                    <FormControl isRequired>
                        <FormControl.Label fontSize='sm' style={styles.label}>
                            <FormControlLabelText>Choose SearchType</FormControlLabelText>
                        </FormControl.Label>
                        <HStack space={2} style={styles.hstack}>
                            <Select style={styles.select} onValueChange={setTypeOfShow}>
                                <SelectTrigger variant="outline" size="md">
                                    <SelectInput placeholder="Select option" />
                                    <SelectIcon style={styles.selectIcon}>
                                        <Icon as={ChevronDownIcon} />
                                    </SelectIcon>
                                </SelectTrigger>
                                <SelectPortal>
                                    <SelectBackdrop />
                                    <SelectContent>
                                        <SelectDragIndicatorWrapper>
                                            <SelectDragIndicator />
                                        </SelectDragIndicatorWrapper>
                                        <SelectItem label="movie" value="movie" />
                                        <SelectItem label="tv" value="tv" />
                                        <SelectItem label="multi" value="multi" />
                                    </SelectContent>
                                </SelectPortal>
                            </Select>
                            <Button onPress={onSubmit} style={styles.button}>
                                <ButtonIcon as={SearchIcon} style={styles.buttonIcon} />
                                <ButtonText>Search</ButtonText>
                            </Button>
                        </HStack>
                    </FormControl>
                    {error ? <Text style={styles.errorText}>Movie/TV Show name is required</Text> : null}
                </VStack>
            </Box>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00BFFF',
    },
    buttonIcon: {
        marginRight: 5
    },
    box: {
        backgroundColor: 'white',
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 30
    },
    hstack: {
        width: '100%'
    },
    label: {
        marginTop: 10
    },
    vstack: {
        width: '100%',
        padding: 5,
        marginTop: 5
    },
    select: {
        flex: 1,
        alignItems: 'center',
        marginRight: 20,
    },
    selectIcon: {
        marginRight: 10
    },
    errorText: {
        color: 'red',
        marginTop: 15,
        fontSize: 14,
    },
});

export default SearchForm;

