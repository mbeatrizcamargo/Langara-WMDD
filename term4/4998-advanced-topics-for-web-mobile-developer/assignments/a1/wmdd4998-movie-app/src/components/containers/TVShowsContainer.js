import { Box } from "@gluestack-ui/themed";
import SelectTVShowType from "../forms/SelectTVShowType";
import { getShows } from "../../services/api";
import { useState, useEffect } from "react";
import TVShowsList from "../lists/TVShowsList";
import Loading from "../layout/Loading";
import { StyleSheet } from "react-native";

const TVShowsContainer = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [keyword, setKeyword] = useState('popular');
    const [tvShows, setTvShows] = useState([]);

    useEffect(() => {
        const fetchTVShows = async () => {
            if (!keyword) return;

            setIsLoading(true);
            console.log('fetching tv shows');

            try {
                const tvShows = await getShows('tv', keyword);
                setTvShows(tvShows);
            } catch (error) {
                alert(`Something went wrong: ${error}`);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTVShows();
    }, [keyword]);

    const handleInputChange = (newKeyword) => {
        setKeyword(newKeyword);
    };

    return (
        <Box style={styles.main} >
            <SelectTVShowType onInputChange={handleInputChange} width='100%' />
            {isLoading ? <Loading /> : <TVShowsList navigation={navigation} tvShows={tvShows} />}
        </Box>
    );
};

const styles = StyleSheet.create({
    main: {
        width: '100%',
        backgroundColor: 'white'
    }
})

export default TVShowsContainer;
