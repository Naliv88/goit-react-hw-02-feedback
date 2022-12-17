import React, { Component } from "react";
import { FeedbackOptions } from "./feedbackOptions/feedbackOptions";
import { Statistics } from "./statistics/statistics";
import { Section } from "./section/section.jsx";


export class App extends Component {

  constructor() {
    super();
    this.clickGood = this.clickGood.bind(this);
    this.clickNeutral = this.clickNeutral.bind(this);
    this.clickBad = this.clickBad.bind(this);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
  }

  clickGood = () => {
    this.setState((state) => ({good: state.good + 1}));
   }
  
  clickNeutral() {
    this.setState((state) => ({neutral: state.neutral + 1}));
  }

  clickBad() {
    this.setState((state) => ({bad: state.bad + 1}));
  }
  

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    return this.countTotalFeedback()===0? 0: Math.floor((this.state.good * 100) / this.countTotalFeedback());
  }



  render() {

    return (
      <div>
        <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.clickGood}></FeedbackOptions>
        </Section>
        <Section title="Statistics">
        <Statistics good={this.state.good } neutral={this.state.good } bad={this.state.good } total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage() }></Statistics>
        {/* <Notification message="There is no feedback"></Notification> */}
        </Section>
      </div>
    );
  }
}

  // <div>
  //       <div><h2>Please leave feedback</h2>
  //       <ul>
  //         <li><button
  //         type="button"
  //         onClick={this.clickGood}>Good</button></li>
  //         <li><button
  //         type="button"
  //         onClick={this.clickNeutral}>Neutral</button></li>
  //         <li><button
  //         type="button"
  //         onClick={this.clickBad}>Bad</button></li>
  //         </ul></div>
  //       <div>
  //         <h2>Statistics</h2>
  //         <ul>
  //           <li>Good {this.state.good}</li>
  //           <li>Neutral {this.state.neutral}</li>
  //           <li>Bad {this.state.bad}</li>
  //           <li>Total: {this.countTotalFeedback()}</li>
  //           <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
  //         </ul>
  //       </div>
  //     </div>
