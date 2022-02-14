import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Dashboard } from "./Pages/Dashboard"
import { Expense } from "./Pages/Expense";
import Investiment from "./Pages/Investiment";
import { MainScreen } from "./Pages/MainScreen";
import { Signup } from "./Pages/Signup";

const AppRoutes = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<MainScreen />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="home" element={<MainScreen />} />
                    <Route path="login" element={<Signup />} />
                    <Route path="investimento" element={<Investiment />} />
                    <Route path="despesa" element={<Expense />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoutes;