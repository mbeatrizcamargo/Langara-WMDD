import { SafeAreaView } from "react-native-safe-area-context";
import TVShowsContainer from "../containers/TVShowsContainer";

const TVShowsScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <TVShowsContainer navigation={navigation} />
        </SafeAreaView>
    );
};

export default TVShowsScreen;
