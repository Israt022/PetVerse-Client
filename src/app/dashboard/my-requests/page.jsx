import MyRequestTable from "@/components/dashboardPages/MyRequestTable";
import { auth } from "@/lib/auth";
import { getAdoption } from "@/lib/pets/data";
import { headers } from "next/headers";


const MyRequests = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    const {token} = await auth.api.getToken({
        headers: await headers() 
    });
    const requests = await getAdoption(user.id,token)
    console.log("User Id",user.id);
    console.log("user token",token);
    console.log("Adoption ",requests);
    return (
        <div>
            <h1 className="text-3xl font-bold text-yellow-500">
                My Request Pet
            </h1>
            <div className="my-5">
                <MyRequestTable request={requests}  />
            </div>
        </div>
    );
};

export default MyRequests;