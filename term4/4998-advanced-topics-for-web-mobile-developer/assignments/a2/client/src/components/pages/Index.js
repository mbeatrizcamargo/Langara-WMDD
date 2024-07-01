import AddCar from "../forms/AddCar";
import AddPerson from "../forms/AddPerson";
import Title from "../layout/Title";
import People from "../lists/People";

function Index() {
    return (

        <>
            <Title />
            <AddPerson />
            <AddCar />
            <People />
        </>


    );
}

export default Index;