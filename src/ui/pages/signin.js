import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput} from "mdbreact";
import {connect} from "react-redux";

class Signin extends React.Component {

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
                        <MDBBtn color="success" onClick={this.props.signin(this.state)}>Submit</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signin:(state)=>(e)=> dispatch({type: "USER_SIGNIN", name: state.username})

    }
}
export default connect(null, mapDispatchToProps)(Signin);
