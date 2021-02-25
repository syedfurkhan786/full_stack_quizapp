import React, {Component} from 'react';
import QuizService from './service/QuizService';
import { Formik, Form, Field, ErrorMessage } from 'formik';


class RegistrationComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            message : null,
            username : '',
            password : ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount(){
        if(this.state.id === -1){
            return
        }

        QuizService.retrieveUserById(this.state.id)
        .then(response => this.setState({
            username: response.data.username
        }))
    }

    validate(values){
        let errors = {}
        if(!values.username){
            errors.username = 'Enter a username'
        }else if (!values.password){
            errors.password = 'Enter a password'
        }
        else if (values.password.length < 4) {
            errors.description = 'Enter atleast 4 Characters in Password'
        }
        return errors
    }

    onSubmit(values){
        let user = {
            username : values.username,
            password : values.password
        }

        if(this.state.id == -1){
            QuizService.registerUser(user)
                .then(()=> this.props.history.push(`/`))
                .catch(
                    error => {
                        this.setState({message : 'User already exists'})
                        return
                    }
                )
        }
        else {
            QuizService.loginUser(this.state.id,user)
                .then(
                    response => {
                        this.setState({username : response.data.username})
                        this.props.history.push(`/dashboard/${values.username}`)
                         }
                    )
                     
                .catch(
                    error => {
                        this.setState({message : 'No user record exists...please register'})
                        return
                    }
                )
        }
    }

    render(){
        let { password , username, id } = this.state

        return(
            <div style={{position:'relative',top:'50px'}}>
                <h2>Form</h2>
                <hr/>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <Formik 
                    
                        initialValues={{ id, username, password }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="username" component="div"
                                    className="alert alert-warning"/>
                                    <ErrorMessage name="password" component="div"
                                    className="alert alert-warning"/>
                                    
                                    <fieldset className="form-group">
                                        <label>Username</label>
                                        <Field className="form-control" type="text" name="username" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Password</label>
                                        <Field className="form-control" type="password" name="password" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Submit</button>
                                </Form>
                            )
                        }

                    </Formik>
                </div>
            </div>
        )
    }
}
export default RegistrationComponent;