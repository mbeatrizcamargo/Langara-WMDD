import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, Icon, ChevronDownIcon, Center } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react"

const SelectMovieType = ({ onInputChange }) => {

    const [keyword, setKeyword] = useState(null);

    const handleValueChange = (value) => {
        setKeyword(value);
        onInputChange(value);
    }

    return (
        <SafeAreaView>
            <Center width="$full">
                <Select my={20} onValueChange={handleValueChange}>
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
                            <SelectItem label="now_playing" value="now_playing" />
                            <SelectItem label="popular" value="popular" />
                            <SelectItem label="top_rated" value="top_rated" />
                            <SelectItem label="upcoming" value="upcoming" />
                        </SelectContent>
                    </SelectPortal>
                </Select>
            </Center>
        </SafeAreaView>
    );
};

export default SelectMovieType;
