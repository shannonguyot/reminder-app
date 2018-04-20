import React from 'react';

import { Actions } from 'react-native-router-flux';

import { resetPassword } from '../../api';

import Form from "../../components/Form";
import AuthContainer from "../../components/AuthContainer";

const fields = [
    {
        key:'email',
        label: "Email Address",
        placeholder:"",
        autoFocus:false,
        secureTextEntry:false,
        value: "",
        type: "email"
    }
];

const error = {
    general: "",
    email: ""
}

class ForgotPassword extends React.Component {
    constructor() {
        super();
        this.state = {
            error: error
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
    }

    onSubmit(data) {
        this.setState({error: error}); //clear out error messages

        resetPassword(data, this.onSuccess, this.onError);
    }

    onSuccess() {
        alert("Password Reminder Sent")
        Actions.pop();
    }

    onError(error) {
        let errObj = this.state.error;

        if (error.hasOwnProperty("message")) {
            errObj['general'] = error.message;
        } else {
            let keys = Object.keys(error);
            keys.map((key, index) => {
                errObj[key] = error[key];
            })
        }
        
        this.setState({error: errObj});
    }
    
    render() {
        return (
            <AuthContainer>
                <Form fields={fields}
					  showLabel={true}
                      onSubmit={this.onSubmit}
                      buttonTitle={"SUBMIT"}
                      error={this.state.error}/>
            </AuthContainer>
        );
    }
}

export default ForgotPassword;