import React, {Component} from "react";
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Home from "./home";

class RouteJS extends Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                <Route exact path="/" element={<Home/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default RouteJS;