
import { fetchMyPets } from "@/lib/pets/data";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import TotalListingPage from "@/components/dashboardPages/TotalListingPage";
import AvailablePage from "@/components/dashboardPages/AvailablePage";
import AdoptedPage from "@/components/dashboardPages/AdoptedPage";
import MyListingsClient from "@/components/dashboardPages/MyListingsClient";

const MyListings = async() => {
    const {token} = await auth.api.getToken({
        headers : await headers()
    })
    const session = await auth.api.getSession({
        headers : await headers()
    })

    const user = session?.user;
    const email = user?.email
    const myList = await fetchMyPets(email,token)
    



    return (
        <div className="max-w-5xl mx-auto my-2">
            <MyListingsClient pets={myList} />
        </div>
    );
};

export default MyListings;