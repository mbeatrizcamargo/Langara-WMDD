import { FormControl, FormControlLabelText, HStack, Input, InputField, VStack, Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, Icon, ChevronDownIcon, Center, Button, ButtonIcon, ButtonText, SearchIcon, Text } from "@gluestack-ui/themed";
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
            <VStack space={2} width='100%' p={5} mt={5}>
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
                    <FormControl.Label fontSize='sm'>
                        <FormControlLabelText>Choose SearchType</FormControlLabelText>
                    </FormControl.Label>
                    <HStack width='100%' space={2}>
                        <Select style={styles.inputStyles} mr={10} px={5} onValueChange={setTypeOfShow}>
                            <SelectTrigger variant="outline" size="md">
                                <SelectInput placeholder="Select option" />
                                <SelectIcon mr="$3">
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
                        <Button color='primary' type='solid' onPress={onSubmit}>
                            <ButtonIcon as={SearchIcon} mr='$2' />
                            <ButtonText>Search</ButtonText>
                        </Button>
                    </HStack>
                </FormControl>
                {error ? <Text style={styles.errorText}>Movie/TV Show name is required</Text> : null}
            </VStack>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    inputStyles: { flex: 1, alignItems: 'center' },
    errorText: {
        color: 'red',
        marginTop: 5,
        fontSize: 12,
    },
});

export default SearchForm;
