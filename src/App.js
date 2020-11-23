import React, { Component } from 'react';
import Statistecs from './components/Statistecs/Statistecs.js';
import FeedbackOption from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  toSetState = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = function () {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = function () {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  };
  render() {
    const total = this.countTotalFeedback();
      return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOption onLeaveFeedback={this.toSetState} />
        </Section>
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section>
            <Statistecs
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </>
    );
  }
}
