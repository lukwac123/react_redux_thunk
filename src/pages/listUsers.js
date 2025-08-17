import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import fetchAllUsers from "../services/http/UsersService";

class ListUsers extends Component {
    componentDidMount = () => {
        this.props.getUsers();
    };

    render() {
        return (
            <Container>
                <Row>
                    {this.props.usersFeatchinInProgres && <div>Ładowanie...</div>}
                    {this.props.usersCurrent && this.props.usersCurrent.map(user => (
                        <Col md={4} key={user.id}>
                            <div className="card mt-2">
                                <img className="card-img-top" src={user.avatar} alt="Card img cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{user.first_name}</h5>
                                    <p className="card-text">{user.email}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        usersCurrent: state.usersReducer.users, 
        usersFeatchinInProgres: state.usersReducer.inprogress,  
        usersError: state.usersReducer.error           
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => {
            dispatch(fetchAllUsers());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);
