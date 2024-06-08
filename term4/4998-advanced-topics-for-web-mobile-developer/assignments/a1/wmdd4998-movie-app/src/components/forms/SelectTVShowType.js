import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, Icon, ChevronDownIcon, Center } from "@gluestack-ui/themed"
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react"

const SelectTVShowType = ({ onInputChange }) => {

    const [keyword, setKeyword] = useState(null)

    const handleValueChange = async (value) => {
        setKeyword(value);
        onInputChange(value);
    }

    return (
        <SafeAreaView>
            <Center>
                <Select width='80%' my={20} onValueChange={handleValueChange}>
                    <SelectTrigger variant="outline" size="md" >
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
                            <SelectItem label="popular" value="popular" />
                            <SelectItem label="airing_today" value="airing_today" />
                            <SelectItem label="on_the_air" value="on_the_air" />
                            <SelectItem label="top_rated" value="top_rated" />
                        </SelectContent>
                    </SelectPortal>
                </Select>
            </Center>
        </SafeAreaView>
    )
}

export default SelectTVShowType