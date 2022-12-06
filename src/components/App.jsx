import { Component } from 'react';
import { Container } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    if (event.target.name === 'good') {
      this.setState(prevState => ({ good: prevState.good + 1 }));
    }

    if (event.target.name === 'neutral') {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    }

    if (event.target.name === 'bad') {
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    } else {
      return ((this.state.good * 100) / this.countTotalFeedback()).toFixed(2);
    }
  };

  render() {
    return (
      <Container>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
