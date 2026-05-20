
const TotalListingPage = ({pets}) => {
    console.log(pets,"From total page");
    return (
        <div>
            {
                pets.map(pet => pet.petName)
            }
        </div>
    );
};

export default TotalListingPage;