import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Dashboard } from "./components/Pages/Dashboard/Dashboard";
import { Expense } from "./components/Pages/Expense/Expense";
import InvestimentView from "./components/Pages/Investiment/Investiment-View";
import { MainScreen } from "./components/Pages/MainScreen/MainScreen";
import { Signup } from "./components/Pages/Signup/Signup";

const AppRoutes = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<MainScreen />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="home" element={<MainScreen />} />
                    <Route path="login" element={<Signup />} />
                    <Route path="investimento" element={<InvestimentView />} />
                    <Route path="despesa" element={<Expense />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoutes;