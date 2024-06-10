import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, Icon, ChevronDownIcon, Center, CheckIcon, Box } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react"
import { StyleSheet } from "react-native"

const SelectMovieType = ({ onInputChange }) => {

    const [keyword, setKeyword] = useState(null);

    const handleValueChange = (value) => {
        setKeyword(value);
        onInputChange(value);
    }

    return (
        <SafeAreaView>
            <Box>
                <Center>
                    <Select my={20} onValueChange={handleValueChange} bg='white' w='60%'>
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
                                <SelectItem
                                    label="popular"
                                    value="popular"
                                    style={({ isSelected }) => isSelected ? styles.selectedItem : styles.unselectedItem}
                                >
                                    {({ isSelected }) => (
                                        <>
                                            {isSelected && <Icon as={CheckIcon} color="white" mr={2} />}
                                            <Text style={isSelected ? styles.selectedText : styles.unselectedText}>popular</Text>
                                        </>
                                    )}
                                </SelectItem>
                                <SelectItem
                                    label="now_playing"
                                    value="now_playing"
                                    style={({ isSelected }) => isSelected ? styles.selectedItem : styles.unselectedItem}
                                >
                                    {({ isSelected }) => (
                                        <>
                                            {isSelected && <Icon as={CheckIcon} color="white" mr={2} />}
                                            <Text style={isSelected ? styles.selectedText : styles.unselectedText}>now_playing</Text>
                                        </>
                                    )}
                                </SelectItem>
                                <SelectItem
                                    label="top_rated"
                                    value="top_rated"
                                    style={({ isSelected }) => isSelected ? styles.selectedItem : styles.unselectedItem}
                                >
                                    {({ isSelected }) => (
                                        <>
                                            {isSelected && <Icon as={CheckIcon} color="white" mr={2} />}
                                            <Text style={isSelected ? styles.selectedText : styles.unselectedText}>now_playing</Text>
                                        </>
                                    )}
                                </SelectItem>
                                <SelectItem
                                    label="upcoming"
                                    value="upcoming"
                                    style={({ isSelected }) => isSelected ? styles.selectedItem : styles.unselectedItem}
                                >
                                    {({ isSelected }) => (
                                        <>
                                            {isSelected && <Icon as={CheckIcon} color="white" mr={2} />}
                                            <Text style={isSelected ? styles.selectedText : styles.unselectedText}>upcoming</Text>
                                        </>
                                    )}
                                </SelectItem>
                            </SelectContent>
                        </SelectPortal>
                    </Select>
                </Center>
            </Box>
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
    selectedItem: {
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    unselectedItem: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    selectedText: {
        color: 'white',
    },
    unselectedText: {
        color: 'black',
    },
});

export default SelectMovieType;
