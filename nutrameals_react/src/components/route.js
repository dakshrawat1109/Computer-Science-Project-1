import React, {Component} from "react";
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Register from "./register";

class RouteJS extends Component{
    render(){
        return(
            <BrowserRouter>
                <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/register" element={<Register/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default RouteJS;