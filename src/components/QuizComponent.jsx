import React,{Component} from 'react';
import QuizService from './service/QuizService'

class QuizComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            username : this.props.match.params.username,
            language: this.props.match.params.language,
            questions : [],
            score : 0
        }
        this.refreshQuestions = this.refreshQuestions.bind(this)
        this.submitResults = this.submitResults.bind(this)   
    }

    componentDidMount() {
        this.refreshQuestions();
    }

    submitResults(score){
        this.props.history.push(`${this.state.language}/results/${score}`)
    }

    refreshQuestions() {
        console.log('entered get questions')
        QuizService.retrieveAllQuestions(this.state.username,this.state.language)
            .then(
                response => {
                    this.setState({ questions: response.data })
                    console.log(this.state.questions)
                }
            )
    }

    
    handleChange = e =>{
        const {name, value} = e.target;
        
        if(name === value){
            this.setState({score : this.state.score + 1})
        }
        
    }

    render(){
        return (
            <div className="container" style={{position:'relative',top:'80px'}}>
                <h2 style={{position:'relative',left:'500px'}}>{this.state.language} Quiz</h2>
                <br/>
                <table className="table">
                        <thead>
                            <tr>
                                <th>Question</th>
                                <th>Option One</th>
                                <th>Option Two</th>
                                <th>Option Three</th>
                                <th>Option Four</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                this.state.questions.map(
                                    question =>
                                <tr key={question.questionId}>
                                
                                    <td><h2 style={{position:'relative',left:'10px'}}>{question.questions}</h2></td>
                                    <td><span >{question.optionOne}</span><input value={question.optionOne} type="radio" name={question.answer} onChange={this.handleChange}/></td>
                                    <td><span>{question.optionTwo}</span><input value={question.optionTwo} type="radio" name={question.answer} onChange={this.handleChange}/></td>
                                    <td><span>{question.optionThree}</span><input value={question.optionThree} type="radio" name={question.answer} onChange={this.handleChange}/></td>
                                    <td><span>{question.optionFour}</span><input value={question.optionFour} type="radio" name={question.answer} onChange={this.handleChange}/></td>
                                
                                </tr>
                                )
                            }
                        </tbody>
                        <br/>
                        <div className="quiz-btn" id="quiz-btn">
                        <button className="btn btn-success"  onClick={(e) => this.submitResults(this.state.score)}>Submit</button>
                        </div>
                    </table>
            </div>
        )
    }

}

export default QuizComponent;