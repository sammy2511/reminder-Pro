  import React, { Component } from 'react';
  import {connect} from 'react-redux';
  import {bindActionCreators} from 'redux';
  import {addReminder,deleteReminder,clearAllReminder} from '../actions';
  import '../index.css';
  import moment from 'moment';


  class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        text:'',
        dueDate:''
      }
    }

    addReminder(){
      console.log(this.state.dueDate);
      this.props.addReminder(this.state.text,this.state.dueDate);
    }

    deleteReminder(id){
      console.log('Deleting reminder with id:',id);
      console.log(this.props);
      this.props.deleteReminder(id)
    }

    clearAllReminder(){
      this.props.clearAllReminder();
    }

    renderReminder(){
      const {reminders} = this.props;
      return(
        <ul className="list-group col-sm-4">
          {
            reminders.map(reminder =>{
              return(
                <li key={reminder.id} className="list-group-item">
                  <div className="list-item">
                    <div>{reminder.text}</div>
                    <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                    {
                      new Date(reminder.dueDate) < new Date()?
                      <div className="alert">"Due date is passed"</div>:
                      <div></div>
                    }
                  </div>

                  <div
                    className="list-item delete-button"
                    onClick = {()=> this.deleteReminder(reminder.id)}>
                    &#x274C;
                  </div>
                </li>
              )
            })
          }
        </ul>
      )
    }

  render(){
    console.log('this.props',this.props);
    return(
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to...."
              onChange = {event => this.setState({text: event.target.value})}
            />

            <input
              className="form-control"
              type="datetime-local"
              onChange = {event => this.setState({dueDate: event.target.value})}
            />

            <button
              className="btn btn-success"
              type="button"
              onClick = {() =>this.addReminder()}
              >
                Add Reminder
              </button>
              <button
                className="btn btn-danger"
                type="button"
                onClick = {() =>this.clearAllReminder()}
                >
                  Clear All
                </button>
          </div>
        </div>
          {this.renderReminder()}
      </div>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addReminder},dispatch);
}

function mapStateToProps(state){
    console.log('state',state);
    return {
      reminders:state
    }
}

  export default connect(mapStateToProps,{addReminder,deleteReminder,clearAllReminder})(App);
