export const getFeaturePets = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/features`);
    const data = await res.json();

    return data || [];
}

// get all pets
export const getAllPets = async(
        search = "",
        category = "",
        sort = ""
    ) =>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets?search=${search}&category=${category}&sort=${sort}`);
        const data = await res.json();

        return data || [];
}

// get pets by id
export const getPetsById = async(id,token) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${id}`,{
        headers:{
            authorization : `Bearer ${token}` || ""
        }
    });
    const data = await res.json();

    return data || {};
}

// post pets 
export const postPet = async(pets) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets`,{
        method : 'POST',
        headers : {
            'content-type' : 'application/json',
            // authorization : token ? `Bearer ${token}` : ""
        },
        body : JSON.stringify(pets)
    });
    const data = await res.json();

    return data || "";
}

// get my-pet 
export const fetchMyPets = async (email,token) => {
    // console.log("TOKEN from data:", token);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-pets/${email}`
        ,{
        headers : {
            authorization : `Bearer ${token}`
        }
    }
);
    const data = await res.json();
    return data || "";
};