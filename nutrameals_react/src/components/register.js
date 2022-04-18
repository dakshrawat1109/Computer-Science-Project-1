import React, {Component, Fragment} from "react";
import {
	Typography,
    Paper,
    Container,
    Grid,
    TextField,
    Button,
} from "@material-ui/core";
import axios from "axios";
import './register.css';

class Register extends Component{
    state = {
        loginDetails:{
            userName : "",
            password : "",
            firstName : "",
            lastName : "",
            email : "",
            phone : "",
            addressLine1 : "",
            addressLine2 : "",
            zipCode :"",
            state : "",
            city : "",
        },
        redirect: false,
    };
    onRegister = () => {
        var loginDetails = this.state.loginDetails;
        axios
        .post(" http://localhost:8080/register", loginDetails
        )
        .then((response,body) => {
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
    changeHandlerFName = (event) => {
		event.persist();
		this.setState((prevState) => ({
			loginDetails: {...prevState.loginDetails, firstName: event.target.value},
		}));
	};
	changeHandlerLName = (event) => {
		event.persist();
		this.setState((prevState) => ({
			loginDetails: {...prevState.loginDetails, lastName: event.target.value},
		}));
	};
	changeHandlerEmail = (event) => {
		event.persist();
		this.setState((prevState) => ({
			loginDetails: {...prevState.loginDetails, email: event.target.value},
		}));
	};
    changeHandlerPhone = (event) => {
		event.persist();
		this.setState((prevState) => ({
			loginDetails: {...prevState.loginDetails, phone: event.target.value},
		}));
	};
	changeHandlerAddressLine1 = (event) => {
		event.persist();

		this.setState((prevState) => ({
			loginDetails: {...prevState.loginDetails, addressLine1: event.target.value},
		}));
	};
    changeHandlerAddressLine2 = (event) => {
		event.persist();

		this.setState((prevState) => ({
			loginDetails: {...prevState.loginDetails, addressLine2: event.target.value},
		}));
	};
	changeHandlerZip = (event) => {
		event.persist();
		var length = event.target.value.length;
		this.setState((prevState) => ({
			loginDetails: {...prevState.loginDetails, zipCode: event.target.value},
		}));

		if (length === 5) {
			fetch(` http://ZiptasticAPI.com/${event.target.value}`)
				.then((res) => res.json())
				.then(
					(result) => {
						this.setState((prevState) => ({
							loginDetails: {
								...prevState.loginDetails,
								city: result.city,
								state: result.state,
							},
						}));
					},
					(error) => {
						this.setState((prevState) => ({
							loginDetails: {
								...prevState.loginDetails,
								zipCode: error,
							},
						}));
						console.log("Error" + error);
					},
				);
		}
	};

    render(){
        return(
            <Fragment>
                <div className="registerBox" >
                    <Paper elevation={5} color="primary.main">
                    <Container maxWidth="md" className="formContainer">
                            <Grid container  direction="column" justifyContent="center" spacing={5} className="login-form">
                                    <Grid item>
                                    <Typography component="h1" variant="h5">
                                        Register
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                                required
                                                id="outlined-full-width"
                                                label="User name"
                                                variant="outlined"
                                                fullWidth
                                                onChange={(value) => this.changeHandlerUserName(value)}
                                            />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                                required
                                                id="outlined-full-width"
                                                label="Password"
                                                variant="outlined"
                                                fullWidth
                                                onChange={(value) => this.changeHandlerPassword(value)}
                                            />
                                    </Grid>
                                    <Grid item xs>
									<TextField
										required
										id="outlined-full-width"
										label="First Name"
										variant="outlined"
										fullWidth
										onChange={(value) => this.changeHandlerFName(value)}
									/>
                                    </Grid>
                                    <Grid item xs>
                                        <TextField
                                            required
                                            id="outlined-full-width"
                                            label="Last Name"
                                            variant="outlined"
                                            fullWidth
                                            onChange={(value) => this.changeHandlerLName(value)}
                                        />
                                    </Grid>
                                    <Grid container spacing={3} item>
                                        <Grid item sm>
                                            <TextField
                                                required
                                                id="outlined-full-width"
                                                label="Email"
                                                variant="outlined"
                                                fullWidth
                                                onChange={(value) => this.changeHandlerEmail(value)}
                                            />
                                        </Grid>
                                        <Grid item sm>
                                            <TextField
                                                required
                                                id="outlined-full-width"
                                                label="Phone"
                                                variant="outlined"
                                                fullWidth
                                                onChange={(value) => this.changeHandlerPhone(value)}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3} item>
                                    <Grid item sm>
                                        <TextField
                                            required
                                            id="outlined-full-width"
                                            label="Address Line 1"
                                            variant="outlined"
                                            fullWidth
                                            onChange={(value) => this.changeHandlerAddressLine1(value)}
                                        />
                                    </Grid>
                                    <Grid item sm>
                                        <TextField
                                            required
                                            id="outlined-full-width"
                                            label="Address Line 2"
                                            variant="outlined"
                                            fullWidth
                                            onChange={(value) => this.changeHandlerAddressLine2(value)}
                                        />
                                    </Grid>
								</Grid>
							<Grid container spacing={3} item>
								<Grid item xs={3}>
									<TextField
										id="outlined-full-width"
										label="City"
										variant="filled"
										disabled
										value={this.state.loginDetails.city}
									/>
								</Grid>
								<Grid item xs>
									<TextField
										id="outlined-full-width"
										label="State"
										variant="filled"
										fullWidth
										disabled
										value={this.state.loginDetails.state}
									/>
								</Grid>
								<Grid item xs>
									<TextField
										required
										id="outlined-full-width"
										label="Zip Code"
										variant="outlined"
										fullWidth
										onChange={(value) => this.changeHandlerZip(value)}
									/>
								</Grid>
                                    <Grid item>
                                        <Button
                                                variant="contained"
                                                size="large"
                                                color="primary"
                                                fullWidth
                                                onClick={this.onRegister}>
                                                Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                    </Container> 
                    </Paper>
            </div>
            </Fragment>
        );
    }
}

export default Register;