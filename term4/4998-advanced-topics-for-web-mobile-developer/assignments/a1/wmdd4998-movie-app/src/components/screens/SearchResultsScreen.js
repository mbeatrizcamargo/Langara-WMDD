import { Box, StatusBar, Text } from "@gluestack-ui/themed"
import { SafeAreaView } from "react-native-safe-area-context"
import SearchForm from "../forms/SearchForm"
import { getShows } from "../../services/api"
import { useState, useEffect } from "react"

const SearchResultsScreen = () => {

    const searchEndpoint = 'search/'

    const [isVisible, setIsVisible] = useState(true)

    const handleDelete = () => {
        setIsVisible(false);
    };



    return (
        <SafeAreaView>
            <SearchForm handleSubmit={() => {
                handleDelete();
            }} />
            {
                isVisible && (
                    <Text>Please initiate a search</Text>
                )
            }
        </SafeAreaView>
    )
}

export default SearchResultsScreen