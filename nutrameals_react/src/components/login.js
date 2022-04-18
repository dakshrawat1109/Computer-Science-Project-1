import React, {Component, Fragment} from "react";
import { hashHistory } from "react-router";
import {
	Typography,
    Paper,
    Container,
    Grid,
    TextField,
    Button,
} from "@material-ui/core";
import axios from "axios";
import './login.css';

class Login extends Component{
    state = {
        loginDetails:{
            userName : "",
            password : "",
        },
        redirect: false,
    };
    onLogin = () => {
        var loginDetails = this.state.loginDetails;
        axios
        .post(" http://localhost:8080/login", loginDetails
        )
        .then((response,body) => {
            if(response.status===200 && response.data === "Login Successful"){
                this.props.router.push('/');
            }
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
		
	};
    changeHandlerUserName = (event) => {
		event.persist();

		this.setState((prevState) => ({
			loginDetails: {...prevState.loginDetails, userName: event.target.value},
		}));
	};
    changeHandlerPassword = (event) => {
		event.persist();

		this.setState((prevState) => ({
			loginDetails: {...prevState.loginDetails, password: event.target.value},
		}));
	};
    render(){
        return(
            <Fragment>
                <div className="loginBox" >
                    <Paper elevation={5} color="primary.main">
                    <Container maxWidth="md" className="formContainer">
                            <Grid container  direction="column" justifyContent="center" spacing={5} className="login-form">
                                    <Grid item>
                                    <Typography component="h1" variant="h5">
                                        Sign in
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                                required
                                                label="User name"
                                                variant="outlined"
                                                fullWidth
                                                onChange={(value) => this.changeHandlerUserName(value)}
                                            />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                                required
                                                label="Password"
                                                variant="outlined"
                                                type ="password"
                                                fullWidth
                                                onChange={(value) => this.changeHandlerPassword(value)}
                                            />
                                    </Grid>
                                    <Grid item>
                                        <Button
                                                variant="contained"
                                                size="large"
                                                color="primary"
                                                fullWidth
                                                onClick={this.onLogin}>
                                                Submit
                                        </Button>
                                    </Grid>
                                
                            </Grid>
                    </Container> 
                    </Paper>
            </div>
            </Fragment>
        );
    }
}

export default Login;