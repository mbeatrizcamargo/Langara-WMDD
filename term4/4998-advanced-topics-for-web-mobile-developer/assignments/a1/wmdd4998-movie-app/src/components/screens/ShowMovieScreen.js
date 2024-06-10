import React from 'react';
import { Box } from '@gluestack-ui/themed';
import MovieDetails from '../listItems/MovieDetails';

const ShowMovieScreen = ({ route, navigation }) => {
    return (
        <Box>
            <MovieDetails route={route} navigation={navigation} />
        </Box>
    );
};

export default ShowMovieScreen;
