import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput} from "mdbreact";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import axios from "axios";

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        }
    }

    onChange(e) {
        let state = {};
        state[e.target.name] = e.target.value;
        this.setState(state);
    }


    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="12">
                        <MDBInput label="Email" name="username" onChange={this.onChange.bind(this)}/>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="12">
                        <MDBInput type="password" label="Password" name="password" onChange={(e) => this.onChange(e)}/>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="12">
                        <MDBBtn color="success" onClick={this.props.signup(this.state, this.props.history)}>Submit</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (state, history) => (e) => {
            dispatch(dispatch => {
                axios.post("http://localhost:3000/users", {
                    username: state.username,
                    password: state.password
                }).then(res => {
                    dispatch({type: "USER_SIGNUP", ...res});
                    history.push("/login");

                }).catch(res => {
                    console.log("error" + res.data);
                })
            })
        }
    }
}

const mapStateToProps = (state) => {
    return state.user
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));
