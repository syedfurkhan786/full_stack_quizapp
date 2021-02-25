import React,{Component} from 'react';
import QuizService from './service/QuizService'


class ResultComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            username : this.props.match.params.username,
            language: this.props.match.params.language,
            score : this.props.match.params.score,
            results : [],
           
        }
        this.newQuiz = this.newQuiz.bind(this)
          this.logout = this.logout.bind(this)
        this.refreshResults = this.refreshResults.bind(this)
          
    }

    

    componentDidMount(){
        this.refreshResults(this.state.username, this.state.language, this.state.score);
        
    }

    refreshResults(username,language,score){
        QuizService.retrieveResults(username,language,score)
        .then(
            response => {
                this.setState({ results: response.data })
                
            }
        )
    }

    logout(){
        this.props.history.push(`/`)
        
        
    }

    newQuiz(){
        this.props.history.push(`/dashboard/${this.state.username}`)
        
    }

    render(){
        return(
            <div className="container">
                
                <br/>
                
                <h2 style={{position:'relative',left:'350px'}}>You have scored {Math.round(this.state.score/0.03)}%</h2>
                <h2 style={{position:'relative',left:'0px'}}>Results Table</h2>
                <table className="table">
                        <thead>
                            <tr>
                                <th>Result Id</th>
                                <th>Username</th>
                                <th>Language</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.results.map(
                                    result =>
                                <tr key={result.resultId}>
                                <td>{result.resultId}</td>
                                <td>{result.username}</td>
                                <td>{result.questionLanguage}</td>
                                <td>{result.score}</td>
                                
                                </tr>
                                )
                            }
                            
                        </tbody>
                    </table>
                    <div className="redirect">
                    <button className="btn btn-success"  onClick={this.newQuiz}>Take Another Quiz</button> 
                    <button className="btn btn-warning"  onClick={this.logout}>Logout</button>
                    </div>
                    
                    
            </div>
            
        )
        
    }
}

export default ResultComponent