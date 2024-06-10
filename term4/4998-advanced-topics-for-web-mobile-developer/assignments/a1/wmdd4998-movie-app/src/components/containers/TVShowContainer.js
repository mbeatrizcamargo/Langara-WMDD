// import React, { useEffect, useState } from "react";
// import { Box, Center, Button, ButtonText, Text } from "react-native";

// const TVShowContainer = ({ navigation, route }) => {
//     const [tvShowData, setTVShowData] = useState(null);

//     const { title, id } = route.params;

//     useEffect(() => {
//         // Make API call to fetch detailed movie information using the id
//         // Example: fetchMovieDetails(id).then((data) => setMovieData(data));
//     }, [id]);

//     return (
//         <Box width="100%">
//             <Center py={10}>
//                 <Text my={10}>{title}</Text>
//             </Center>
//             <Button onPress={() => navigation.navigate('TV Show Details', { title, id })} variant="link">
//                 <ButtonText>Proceed to web view</ButtonText>
//             </Button>
//         </Box>
//     );
// };

// export default TVShowContainer;
