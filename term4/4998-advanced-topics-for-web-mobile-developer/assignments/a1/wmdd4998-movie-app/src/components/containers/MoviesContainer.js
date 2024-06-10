import { Box, Center } from "@gluestack-ui/themed";
import SelectMovieType from "../forms/SelectMovieType";
import { getShows } from "../../services/api";
import { useState, useEffect } from "react";
import MoviesList from "../lists/MoviesList";
import Loading from "../layout/Loading";
import { StyleSheet } from "react-native";

const MoviesContainer = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [keyword, setKeyword] = useState('popular');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            if (!keyword) return;

            setIsLoading(true);
            console.log('fetching movies');

            try {
                const movies = await getShows('movie', keyword);
                setMovies(movies);
            } catch (error) {
                alert(`Something went wrong: ${error}`);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, [keyword]);

    const handleInputChange = (newKeyword) => {
        setKeyword(newKeyword);
    };

    return (
        <Box style={styles.main} >
            <SelectMovieType onInputChange={handleInputChange} />
            {isLoading ? <Loading /> : <MoviesList navigation={navigation} movies={movies} />}
        </Box>
    );
};

const styles = StyleSheet.create({
    main: {
        width: '100%',
        backgroundColor: 'white'
    }
})

export default MoviesContainer;
