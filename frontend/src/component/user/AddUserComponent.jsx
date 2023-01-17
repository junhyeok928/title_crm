/* eslint-disable */
import React, { Component } from "react";
import ApiService from "../../ApiService";
import WithRouter from "../../WithRouter";

import { TextField, Button, Typography } from "@mui/material";

class AddUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            age: "",
            salary: "",
            message: null,
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    saveUser = (e) => {
        e.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            salary: this.state.salary,
        };

        ApiService.addUser(user)
            .then((res) => {
                this.setState({
                    message: user.username + "님이 성공적으로 등록되었습니다.",
                });
                console.log(this.state.message);
                this.props.navigate("/users");
            })
            .catch((err) => {
                console.log("saveUser() Error!", err);
            });
    };

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>
                    Add User
                </Typography>
                <form style={formContainer}>
                    <TextField
                        type="text"
                        name="username"
                        placeholder="please input your username"
                        value={this.state.username}
                        onChange={this.onChange}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        type="password"
                        name="password"
                        placeholder="please input your password"
                        value={this.state.password}
                        onChange={this.onChange}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        type="text"
                        name="firstName"
                        placeholder="please input your first name"
                        value={this.state.firstName}
                        onChange={this.onChange}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        type="text"
                        name="lastName"
                        placeholder="please input your last name"
                        value={this.state.lastName}
                        onChange={this.onChange}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        type="number"
                        name="age"
                        placeholder="please input your age"
                        value={this.state.age}
                        onChange={this.onChange}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        type="number"
                        name="salary"
                        placeholder="please input your salary"
                        value={this.state.salary}
                        onChange={this.onChange}
                        fullWidth
                        margin="normal"
                    />

                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
                </form>
            </div>
        );
    }
}

const formContainer = {
    display: "flex",
    flexFlow: "row wrap",
};
const style = {
    display: "flex",
    justifyContent: "center",
};
export default WithRouter(AddUserComponent);
