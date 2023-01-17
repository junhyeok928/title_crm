import "./App.css";
import React from "react";
import AppRouter from "./component/route/RouterComponent";
import NavBar from "./component/route/NavBar";

import { Container } from "@mui/material";

function App() {
    return (
        <div>
            <NavBar/>
            <Container>
            <AppRouter/>
            </Container>
            
        </div>
    );
}
export default App;
