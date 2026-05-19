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
