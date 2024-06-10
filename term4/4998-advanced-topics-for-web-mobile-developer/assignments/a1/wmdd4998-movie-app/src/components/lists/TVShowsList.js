import { Center, Divider, FlatList } from "@gluestack-ui/themed";
import TVShowCard from "../listItems/TVShowCard";
import { StyleSheet } from "react-native";

const TVShowsList = ({ navigation, tvShows }) => {
    return (
        <Center style={styles.main}>
            <FlatList
                style={styles.main}
                data={tvShows.results}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <>
                        <TVShowCard
                            image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            title={item.original_name}
                            popularity={item.popularity}
                            releaseDate={item.first_air_date}
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

export default TVShowsList;
