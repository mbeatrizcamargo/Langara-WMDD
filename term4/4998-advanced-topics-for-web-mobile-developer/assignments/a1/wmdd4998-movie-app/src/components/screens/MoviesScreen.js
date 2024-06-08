import { SafeAreaView } from "react-native-safe-area-context";
import MoviesContainer from "../containers/MoviesContainer";

const MoviesScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <MoviesContainer navigation={navigation} />
        </SafeAreaView>
    );
};

export default MoviesScreen;
