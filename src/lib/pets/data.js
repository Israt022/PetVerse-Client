export const getFeaturePets = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/features`);
    const data = res.json();

    return data;
}