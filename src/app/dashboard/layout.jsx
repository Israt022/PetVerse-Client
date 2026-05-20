import DashboardSidebar from "@/components/DashboardSidebar";
import Link from "next/link";


const layout = ({children}) => {
    
    return (
         <div 
            className="flex"
        >
            <div 
            // className="flex-1"
            >

                <DashboardSidebar />
            </div>

            <div 
                    className="flex-1 bg-gray-50 p-8"
            >
                {children}
            </div>

        </div>
    );
};

export default layout;