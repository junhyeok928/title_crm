/* eslint-disable */
import React, { Component } from "react";
import ApiService from "../../ApiService";
import WithRouter from "../../WithRouter";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

class UserListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            message: null,
        };
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList = () => {
        ApiService.fetchUsers()
            .then((res) => {
                this.setState({
                    users: res.data,
                });
            })
            .catch((err) => {
                console.log("reloadUserList() Error!", err);
            });
    };

    deleteUser = (userId) => {
        ApiService.deleteUser(userId)
            .then((res) => {
                this.setState({
                    message: "User Deleted Successfully.",
                });
                this.setState({
                    users: this.state.users.filter((user) => user.id !== userId),
                });
            })
            .catch((err) => {
                console.log("deleteUser() Error!", err);
            });
    };

    editUser = (ID) => {
        window.localStorage.setItem("userID", ID);
        this.props.navigate("/edit-user");
    };

    addUser = () => {
        window.localStorage.removeItem("userID");
        this.props.navigate("/add-user");
    };
    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>
                    User List
                </Typography>
                <Button variant="contained" color="primary" onClick={this.addUser}>
                    Add User
                </Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>FirstName</TableCell>
                            <TableCell align="right">LastName</TableCell>
                            <TableCell align="right">UserName</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Salary</TableCell>
                            <TableCell align="right">Edit</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell component="th" scope="user">
                                    {user.id}
                                </TableCell>
                                <TableCell align="right">{user.firstName}</TableCell>
                                <TableCell align="right">{user.lastName}</TableCell>
                                <TableCell align="right">{user.username}</TableCell>
                                <TableCell align="right">{user.age}</TableCell>
                                <TableCell align="right">{user.salary}</TableCell>
                                <TableCell align="right" onClick={() => this.editUser(user.id)}>
                                    <CreateIcon style={cursor}/>
                                </TableCell>
                                <TableCell align="right" onClick={() => this.deleteUser(user.id)}>
                                    <DeleteIcon style={cursor}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}
const style = {
    display: "flex",
    justifyContent: "center",
};

const cursor = {
    cursor: "pointer",
}
export default WithRouter(UserListComponent);
