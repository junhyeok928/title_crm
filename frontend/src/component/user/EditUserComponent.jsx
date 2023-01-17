/* eslint-disable */
import React, { Component } from "react";
import ApiService from "../../ApiService";
import WithRouter from "../../WithRouter";

import { TextField, Button, Typography } from "@mui/material";

class EditUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            username: "",
            firstName: "",
            lastName: "",
            age: "",
            salary: "",
            message: null,
        };
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser = () => {
        ApiService.fetchUserByID(window.localStorage.getItem("userID"))
            .then((res) => {
                let user = res.data;
                this.setState({
                    id: user.id,
                    username: user.username,
                    password: user.password,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    age: user.age,
                    salary: user.salary,
                });
            })
            .catch((err) => {
                console.log("loadUser() Error!", err);
            });
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    saveUser = (e) => {
        e.preventDefault();

        let user = {
            id: this.state.id,
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            salary: this.state.salary,
        };

        ApiService.editUser(user)
            .then((res) => {
                this.setState({
                    message: user.lastName + "님 정보가 수정되었습니다.",
                });
                this.props.navigate("/users");
            })
            .catch((err) => {
                console.log("saveUser() Error!", err);
            });
    };

    render() {
        return (
            <div>
                <form>
                    <Typography variant="h4" style={style}>
                        Edit User
                    </Typography>
                    <TextField
                        type="text"
                        name="username"
                        inputProps={
                            { readOnly: true, }
                        }
                        value={this.state.username}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        type="text"
                        name="firstName"
                        placeholder="please edit your first name"
                        value={this.state.firstName}
                        onChange={this.onChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        type="text"
                        name="lastName"
                        placeholder="please edit your last name"
                        value={this.state.lastName}
                        onChange={this.onChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        type="number"
                        name="firstName"
                        placeholder="please edit your age"
                        value={this.state.age}
                        onChange={this.onChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        type="number"
                        name="salary"
                        placeholder="please edit your salary"
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
const style = {
    display: "flex",
    justifyContent: "center",
};
export default WithRouter(EditUserComponent);
