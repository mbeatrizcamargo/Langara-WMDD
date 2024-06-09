import { Center, FlatList } from "@gluestack-ui/themed";
import MovieCard from "../listItems/MovieCard";

const MoviesList = ({ navigation, movies }) => {
    return (
        <Center>
            <FlatList width='100%'
                data={movies.results}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <MovieCard
                        image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        title={item.original_title}
                        popularity={item.popularity}
                        releaseDate={item.release_date}
                        navigation={navigation}
                        id={item.id}
                        width='100%'
                    />
                )}
            />
        </Center>
    );
};

export default MoviesList;
