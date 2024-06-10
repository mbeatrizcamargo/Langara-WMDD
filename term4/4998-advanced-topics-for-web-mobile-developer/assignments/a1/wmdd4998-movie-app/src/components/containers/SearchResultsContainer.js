import { Box, Center } from "@gluestack-ui/themed";
import { searchShows } from "../../services/api";
import { useState, useEffect } from "react";
import SearchResultsList from "../lists/SearchResultsList";
import Loading from "../layout/Loading";
import { StyleSheet } from "react-native";

const SearchResultsContainer = ({ typeOfShow, keyword }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            if (!keyword) return;

            setIsLoading(true);
            console.log(`Fetching ${typeOfShow} shows`);

            try {
                const results = await searchShows(typeOfShow, keyword);
                setResults(results);
            } catch (error) {
                alert(`Something went wrong: ${error}`);
            } finally {
                setIsLoading(false);
            }
        };

        fetchResults();
    }, [typeOfShow, keyword]);

    return (
        <Box style={styles.main}>
            {isLoading ? <Loading /> : <SearchResultsList typeOfShow={typeOfShow} results={results} />}
        </Box>
    );
};

const styles = StyleSheet.create({
    main: {
        width: '100%',
        backgroundColor: 'white'
    }
})

export default SearchResultsContainer;
