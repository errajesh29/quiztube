import React, { PropTypes, Component } from 'react';
import update from 'react-addons-update';
import './style/quiz.css';

class CreateQuiz extends Component 
{

  constructor(props) 
  {
    super(props);
    this.state = {
                    question: this.props.question || '',
                    answer: this.props.answer || '',
                    level : 1

                  };
  }

  // static propTypes = {
  //       question: PropTypes.string,
  //       answer: PropTypes.string,
  //       placeholder: PropTypes.string,
  // };

  handleSubmit(e)
  {
        e.preventDefault();
        const question = this.refs.question.value;
        const answer = this.refs.answer.value;

        this.props.addQues(question,answer);
        this.refs.questionForm.reset();
  }


  render() {
    return (
      <header >
          <h2>MANAGE QUIZ</h2>
          <h4>Create a new quiz (live after review)</h4>
          <div>
                    <form ref='questionForm' onSubmit={this.handleSubmit.bind(this)}>
                        Question: <input type='text' ref='question' placeholder='Enter Question'/><br/>
                        <br/>
                        <p> Enter Quiz Options: </p><br/>
                        (A)  <input type='text' ref='A' placeholder='First Option'/><br/><br/>
                        (B)  <input type='text' ref='B' placeholder='Second Option'/><br/><br/>
                        (C)  <input type='text' ref='C' placeholder='Third Option'/><br/><br/>
                        (D)  <input type='text' ref='D' placeholder='Fourth Option'/><br/><br/>
                        (E) (optional) <input type='text' ref='E' placeholder='Fifth Option'/><br/><br/>
                        
                        <div>
                        Answer: (A)    <input type='radio' ref='A' name="radioGroup"/>
                         (B)  <input type='radio' ref='B' name="radioGroup"/>
                         (C)  <input type='radio' ref='C' name="radioGroup"/>
                         (D)  <input type='radio' ref='D' name="radioGroup"/>
                         (E)  <input type='radio' ref='E' name="radioGroup"/>
                       
                        <br/><br/>
                        </div>
                        Level: 1  <input type='radio' checked='true' ref='L1' name="radioLevel"/>
                        2  <input type='radio' ref='L2' name="radioLevel"/>
                        3  <input type='radio' ref='L3' name="radioLevel"/>
                        
                        <br/><br/>
                                             
                        <input className="feedback-button" type="submit" value="submit" />
                     
                        
                    </form>
            </div>
      </header>
    );
  }
}

export default CreateQuiz;