export const getFeaturePets = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/features`);
    const data = await res.json();

    return data || [];
}

// get all pets
export const getAllPets = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets`);
    const data = await res.json();

    return data || [];
}

// get pets by id
export const getPetsById = async(id) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${id}`);
    const data = await res.json();

    return data || {};
}
