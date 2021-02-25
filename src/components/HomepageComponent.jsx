import React, {Component} from 'react';
import QuizService from './service/QuizService'

class HomepageComponent extends Component{
    constructor(props){
        super(props)
        this.state= {
            users : []
        }
        this.refreshUsers = this.refreshUsers.bind(this)
        this.addUserClicked = this.addUserClicked.bind(this)
        this.loginUserClicked = this.loginUserClicked.bind(this)
    }

    componentDidMount() {
        this.refreshUsers();
    }

    refreshUsers() {
        QuizService.retrieveAllUsers()
            .then(
                response => {
                    this.setState({ users: response.data })
                    
                }
            )
    }

    addUserClicked(){
        this.props.history.push(`/users/-1`)
    }

    loginUserClicked(id){
        this.props.history.push(`/users/${id}`)
    }

    render(){
        return(
            <div className="container">
                <h3>Welcome to Whiz Quiz</h3>
                <br/>
                <h4>Registered Users</h4>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Login</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                <tr key={user.id}>
                                <td>{user.username}</td>
                                <td><button className="btn btn-warning" onClick={() => this.loginUserClicked(user.id)}>Login</button></td>
                                        
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                    
                        <h5>New User? Click below to register</h5> 
                    
                    <div className="row">
                    <button className="btn btn-success" onClick={this.addUserClicked}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomepageComponent;