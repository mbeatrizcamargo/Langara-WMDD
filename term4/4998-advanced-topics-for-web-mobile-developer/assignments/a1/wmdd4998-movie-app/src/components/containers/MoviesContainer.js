import { Center } from "@gluestack-ui/themed";
import SelectMovieType from "../forms/SelectMovieType";
import { getShows } from "../../services/api";
import { useState, useEffect } from "react";
import MoviesList from "../lists/MoviesList";
import Loading from "../layout/Loading";

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
        <Center width='100%' id='movies-container-center'>
            <SelectMovieType onInputChange={handleInputChange} width='100%' id='movies-container-select-movie-type' />
            {isLoading ? <Loading /> : <MoviesList navigation={navigation} movies={movies} id='movies-container-movies-list' />}
        </Center>
    );
};

export default MoviesContainer;
