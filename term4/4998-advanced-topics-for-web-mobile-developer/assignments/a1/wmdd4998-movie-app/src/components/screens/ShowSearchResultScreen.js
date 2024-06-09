import React from 'react';
import { Box, Text } from '@gluestack-ui/themed';
import SearchResultDetails from '../listItems/SearchResultDetails';

const ShowSearchResultScreen = ({ route, navigation }) => {
    return (
        <Box>
            <SearchResultDetails route={route} navigation={navigation} />
        </Box>
    );
};

export default ShowSearchResultScreen;
