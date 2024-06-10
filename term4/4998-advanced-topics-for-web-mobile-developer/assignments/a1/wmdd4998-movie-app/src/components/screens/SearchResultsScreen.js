import { Box, StatusBar, Text } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchForm from "../forms/SearchForm";
import { useState } from "react";
import SearchResultsContainer from "../containers/SearchResultsContainer";
import { StyleSheet } from "react-native";

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
            <SearchForm handleSubmit={handleSubmit}/>
            {
                isVisible ? (
                    <Text style={styles.text}>
                        Please initiate a search
                        </Text>
                ) : (
                    <SearchResultsContainer typeOfShow={typeOfShow} keyword={keyword} width='100%' />
                )
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 100
    }
})

export default SearchResultsScreen;
