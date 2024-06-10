import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, Icon, ChevronDownIcon, Center, CheckIcon, Box } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react"
import { StyleSheet } from "react-native"

const SelectTVShowType = ({ onInputChange }) => {

    const [keyword, setKeyword] = useState(null)

    const handleValueChange = async (value) => {
        setKeyword(value);
        onInputChange(value);
    }

    return (
        <SafeAreaView>
            <Box>
                <Center>
                    <Select onValueChange={handleValueChange} style={styles.select}>
                        <SelectTrigger variant="outline" size="md" >
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
                                <SelectItem
                                label="popular" value="popular"
                                style={styles.item}
                                />
                                <SelectItem label="airing_today" value="airing_today"
                                style={styles.item}
                                />
                                <SelectItem label="on_the_air" value="on_the_air"
                                style={styles.item}
                                />
                                <SelectItem
                                label="top_rated" value="top_rated"
                                style={styles.item}
                                />
                            </SelectContent>
                        </SelectPortal>
                    </Select>
                </Center>
            </Box>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    item: {

    },
    select: {
        backgroundColor: 'white',
        marginTop: 30,
        marginBottom: 20,
        width: '60%'
    },
    selectIcon: {
        marginRight: 10
    }
});

export default SelectTVShowType