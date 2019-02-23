import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput} from "mdbreact";

export default class SignUp extends React.Component {

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="12">
                        <MDBInput label="Email" />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="12">
                        <MDBInput type="password" label="Password" />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="12">
                        <MDBBtn color="success" onCliCk>Submit</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}