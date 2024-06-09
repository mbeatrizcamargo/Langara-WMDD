import { SafeAreaView } from "react-native-safe-area-context";
import MoviesContainer from "../containers/MoviesContainer";

const MoviesScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <MoviesContainer navigation={navigation} width='100%' />
        </SafeAreaView>
    );
};

export default MoviesScreen;
