import { Center, Divider, FlatList } from "@gluestack-ui/themed";
import MovieCard from "../listItems/MovieCard";
import { StyleSheet } from "react-native";

const MoviesList = ({ navigation, movies }) => {
    return (
        <Center style={styles.main} >
            <FlatList style={styles.main}
                data={movies.results}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <><MovieCard
                        image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        title={item.original_title}
                        popularity={item.popularity}
                        releaseDate={item.release_date}
                        navigation={navigation}
                        id={item.id}
                        style={styles.main} /><Divider /></>
                    )}
            />
        </Center>
    );
};

const styles = StyleSheet.create({
    main: {
        width: '100%'
    }
})

export default MoviesList;
