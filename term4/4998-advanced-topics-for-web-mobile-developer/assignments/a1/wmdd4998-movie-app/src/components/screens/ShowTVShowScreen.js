import React from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import TVShowDetails from '../listItems/TVShowDetails';

const ShowTVShowScreen = ({ route, navigation }) => {
    return (
        <Box>
            <TVShowDetails route={route} navigation={navigation} />
        </Box>
    );
};

export default ShowTVShowScreen;
