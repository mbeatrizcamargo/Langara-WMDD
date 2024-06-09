import { Box, StatusBar, Text } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchForm from "../forms/SearchForm";
import { useState } from "react";
import MoviesContainer from "../containers/MoviesContainer";
import TVShowsContainer from "../containers/TVShowsContainer";
import SearchResultsContainer from "../containers/SearchResultsContainer";

const SearchResultsScreen = () => {
    const [typeOfShow, setTypeOfShow] = useState("");
    const [keyword, setKeyword] = useState("");
    const [isVisible, setIsVisible] = useState(true);

    const handleSubmit = (type, keyword) => {
        setTypeOfShow(type);
        setKeyword(keyword);
        setIsVisible(false);
    };

    return (
        <SafeAreaView>
            <SearchForm handleSubmit={handleSubmit} />
            {
                isVisible ? (
                    <Text>Please initiate a search</Text>
                ) : (
                    <SearchResultsContainer keyword={keyword}/>
                )
            }
        </SafeAreaView>
    );
};

export default SearchResultsScreen;
