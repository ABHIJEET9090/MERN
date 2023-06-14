import { Routes , Route } from "react-router-dom";
import Signin from "./page/signin/signin";
import Signup from "./page/signup/signup";
import HomePage from "./components/homepage";
import { SearchProvider } from "./searchContext";


function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={
                <SearchProvider>
                    <HomePage/>
                </SearchProvider>
            } />
            <Route path="/signin" element={<Signin />}/>
            <Route path="/signup" element={<Signup />}/>

            
        </Routes>
    );
}
export default AllRoutes;