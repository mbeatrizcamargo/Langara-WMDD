import { Center } from "@gluestack-ui/themed";
import SelectTVShowType from "../forms/SelectTVShowType";
import { getShows } from "../../services/api";
import { useState, useEffect } from "react";
import TVShowsList from "../lists/TVShowsList";
import Loading from "../layout/Loading";

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
        <Center>
            <SelectTVShowType onInputChange={handleInputChange} width='100%' />
            {isLoading ? <Loading /> : <TVShowsList navigation={navigation} tvShows={tvShows} />}
        </Center>
    );
};

export default TVShowsContainer;
