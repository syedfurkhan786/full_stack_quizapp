import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomepageComponent from './HomepageComponent';
import RegistrationComponent from './RegistrationComponent'
import DashboardComponent from './DashboardComponent'
import QuizComponent from './QuizComponent'
import ResultComponent from './ResultComponent'


class QuizApp extends Component{
    render(){
        return (<>
            <Router>
                <>
                
                <Switch>
                    <Route path="/" exact component={HomepageComponent} />
                    <Route path="/users" exact component={HomepageComponent} />
                    <Route path="/users/:id" exact component={RegistrationComponent} />
                    <Route path="/dashboard/:username" exact component={DashboardComponent} />
                    <Route path="/:username/quiz/:language" exact component={QuizComponent} />
                    <Route path="/:username/quiz/:language/results/:score" exact component={ResultComponent} />

                    
                </Switch>
                </>
            </Router>
            </>
        
        )
    }
}

export default QuizApp;