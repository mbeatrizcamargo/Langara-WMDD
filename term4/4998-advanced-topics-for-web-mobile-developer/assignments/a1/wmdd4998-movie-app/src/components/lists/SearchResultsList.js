import { FlatList } from "@gluestack-ui/themed";
import SearchResultCard from "../listItems/SearchResultCard";

const SearchResultsList = ({ typeOfShow, results, navigation }) => {
    return (
        <FlatList
            data={results.results}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <SearchResultCard
                    typeOfShow={typeOfShow}
                    image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    title={item.original_title || item.name}
                    popularity={item.popularity}
                    releaseDate={item.release_date || item.first_air_date}
                    navigation={navigation}
                    id={item.id}
                />
            )}
        />
    );
};

export default SearchResultsList;
