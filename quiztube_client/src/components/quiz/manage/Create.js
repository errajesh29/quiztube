import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../style/quiz.css';
// import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
     // type : 'text', // text or image type
      category:'',
      title:'',
      level: '',
      description: '',
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      
      answers: {
        A: '',
        B: '',
        C: '',
        D : '',
        E : ''
      },
      isSubmitted: false 
     
    },
    this.answerSelected = this.answerSelected.bind(this);
    console.log('init');
  }

  answerSelected(evt) {
    
    const state = this.state;
    let answers = state['answers'];
        
    if (evt.target.name === 'A') {
      answers.A = answers.A==='A'? '' : 'A';
    } else if (evt.target.name === 'B') {
      answers.B = answers.B ==='B'? '' : 'B';
    } else if (evt.target.name === 'C') {
      answers.C = answers.C ==='C'? '' : 'C';
    } if (evt.target.name === 'D') {
      answers.D = answers.D ==='D'? '' : 'D';
    } else if (evt.target.name === 'E') {
      answers.E = answers.E ==='E'? '' : 'E';
    }
    this.setState({ answers: answers}, function(){
      console.log(this.state)
    });
  }
  

  onChange = (e) => {
    console.log("change state : " + this.state);
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
    
  }

  onSubmit = (evt) => {
    evt.preventDefault();

    const { category , title, level, description, a, b, c, d, e, answers } = this.state;

    axios.post('/quiz/details', { category , title, level, description, a, b, c, d, e, answers })
      .then((result) => {
        this.props.history.push("/")
      }).catch(err=>{
        console.log(err);
      })
  }

  render() {
    const { category , title, level, description, a, b, c, d, e, answers } = this.state;
    return (
      <div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              CREATE QUIZ
            </h3>
          </div>
          <div class="panel-body">

            {/* <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Book List</Link></h4> */}
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
              <input type="text" class="form-control bold" maxLength="100" name="title" value={title} onChange={this.onChange} placeholder="Enter quiz category (sport, class 1, gk, math, english)" />
                <input type="text" class="form-control bold" maxLength="100" name="title" value={title} onChange={this.onChange} placeholder="Enter quiz title" />
                <div class="form-group">
                <input type="number" maxLength="1" min="0" max="3" class="form-control" name="level" value={level} onChange={this.onChange} placeholder="Level (0-3)" />
              </div>
              </div>
              
              <div class="form-group">
                <textarea class="form-control" maxLength="300" name="description" value={description} onChange={this.onChange} placeholder="Description" cols="60" rows="2">{description}</textarea>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" maxLength="50" for="ans1" name="first" value={a} onChange={this.onChange} placeholder="(A) Enter Option One" />
              </div>
              
              <div class="form-group">
                <input type="text" class="form-control" maxLength="50" name="second" value={b} onChange={this.onChange} placeholder="(B) Enter Option Two" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" maxLength="50" name="third" value={c} onChange={this.onChange} placeholder="(C) Enter Option Three" />
              </div>

              <div class="form-group">
                <input type="text" class="form-control" maxLength="50" name="fourth" value={d} onChange={this.onChange} placeholder="(D) Enter Option Four" />
              </div>

              <div class="form-group">
                <input type="text" class="form-control" maxLength="50" name="fifth" value={e} onChange={this.onChange} placeholder="(E) Enter Option Five (Optional)" />
              </div>
              <div class="form-group">
                <label for="answer">Answer : </label>
                (A)<input type="checkbox" id="ansA" name="A" onChange={this.answerSelected}/> 
                (B)<input type="checkbox" id="ansB" name="B" onChange={this.answerSelected}/> 
                (C)<input type="checkbox" id="ansC" name="C" onChange={this.answerSelected}/> 
                (D)<input type="checkbox" id="ansD" name="D" onChange={this.answerSelected}/> 
                (E)<input type="checkbox" id="ansE" name="E"  onChange={this.answerSelected}/> 
                {/* <input type="text"  class="form-control" name="answer" value={answer} onChange={this.onChange} placeholder="Answer (A or A,B)" /> */}
                <label for="description"></label>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
      // <div class="container col-md-8">
      //   <div class="panel panel-default">
      //     <div class="panel-heading">
      //       <h3 class="panel-title">
      //         CREATE QUIZ
      //       </h3>
      //     </div>
      //     <div class="panel-body">
      //       {/* <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Book List</Link></h4> */}
      //       <form onSubmit={this.onSubmit}>
      //         <div class="form-group">
      //           <label for="description">Quiz description:</label>
      //           <textArea class="form-control" name="description" value={description} onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
      //         </div>
      //         <div class="form-group">
      //           <label for="first">First Option:</label>
      //           <input type="text" class="form-control" name="first" value={first} onChange={this.onChange} placeholder="Option One" />
      //         </div>
      //         <div class="form-group">
      //           <label for="second">Second Option:</label>
      //           <input type="text" class="form-control" name="second" value={second} onChange={this.onChange} placeholder="Option Two" />
      //         </div>
      //         <div class="form-group">
      //           <label for="third">Third Option:</label>
      //           <input type="text" class="form-control" name="third" value={third} onChange={this.onChange} placeholder="Option Three" />
      //         </div>

      //         <div class="form-group">
      //           <label for="fourth">Fourth Option:</label>
      //           <input type="text" class="form-control" name="fourth" value={fourth} onChange={this.onChange} placeholder="Option Four" />
      //         </div>

      //         <div class="form-group">
      //           <label for="fifth">Fifth Option (Optional):</label>
      //           <input type="text" class="form-control" name="fifth" value={fifth} onChange={this.onChange} placeholder="Option Five" />
      //         </div>

      //         <div class="form-group">
      //           <label for="level">Level:</label>
      //           <input type="number" class="form-control" name="level" value={level} onChange={this.onChange} placeholder="Level" />
      //         </div>
      //         <div class="form-group">
      //           <label for="answer">Answer:</label>
      //           <input type="text" class="form-control" name="answer" value={answer} onChange={this.onChange} placeholder="Answer" />
      //         </div>
      //         <button type="submit" class="btn btn-default">Submit</button>
      //       </form>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Create;
