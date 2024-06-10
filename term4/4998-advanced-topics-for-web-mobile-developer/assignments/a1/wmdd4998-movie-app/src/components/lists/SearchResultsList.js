import { Center, Divider, FlatList } from "@gluestack-ui/themed";
import SearchResultCard from "../listItems/SearchResultCard";
import { StyleSheet } from "react-native";

const SearchResultsList = ({ typeOfShow, results, navigation }) => {
    return (
        <Center style={styles.main}>
        <FlatList
        style={styles.main}
            data={results.results}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <>
                <SearchResultCard
                    typeOfShow={typeOfShow}
                    image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    title={item.name || item.original_title}
                    popularity={item.popularity}
                    releaseDate={item.release_date || item.first_air_date}
                    navigation={navigation}
                    id={item.id}
                    style={styles.main}
                />
                <Divider />
                </>
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

export default SearchResultsList;
