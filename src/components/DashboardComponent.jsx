import React, {Component} from 'react';

class DashboardComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            username : this.props.match.params.username,
            language : ''
        }
        this.takeQuizClicked = this.takeQuizClicked.bind(this)

       
    }

    handleChange = e =>{
        const {name, value} = e.target;
        this.state.language = value
        
    }

    takeQuizClicked(language){
        this.props.history.push(`/${this.state.username}/quiz/${language}`)
    }

    // componentDidMount(){
    //     if(this.state.username !== null){
    //         return
    //     }
    //     else{
    //         this.props.history.push(`/users`)
    //     }
    // }

    render(){
        return (
            <div className="container" id="dashboard" style={{position:'relative',top:'50px'}}>
                <h3>Welcome {this.state.username}</h3>
                <h3>Which Quiz would you like to take?</h3>
                <br/><br/>
                <input type="radio" name="language" value="Java" id="java" onChange={this.handleChange}/><span>Java</span>
                <input type="radio" name="language" value="Javascript" id="javascript" onChange={this.handleChange}/><span>JavaScript</span>
                <input type="radio" name="language" value="Sql" id="sql" onChange={this.handleChange}/><span>SQL</span>
                <br/><br/>
                <div className="dashboard-btn">
                        <button className="btn btn-success"  onClick={(e) => this.takeQuizClicked(this.state.language)}>Take Quiz</button>
                </div>
            </div>
        )
    }

}

export default DashboardComponent;