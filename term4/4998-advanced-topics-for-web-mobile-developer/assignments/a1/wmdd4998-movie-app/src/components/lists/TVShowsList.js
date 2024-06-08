import { FlatList } from "@gluestack-ui/themed";
import TVShowCard from "../listItems/TVShowCard";

const TVShowsList = ({ navigation, tvShows }) => {
    return (
        <FlatList
            data={tvShows.results}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TVShowCard
                    image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    title={item.original_title}
                    popularity={item.popularity}
                    releaseDate={item.release_date}
                    navigation={navigation}
                    id={item.id}
                />
            )}
        />
    );
};

export default TVShowsList;
