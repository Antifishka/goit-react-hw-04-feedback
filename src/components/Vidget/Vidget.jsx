import React from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Value } from "./Value/Value";
import { BoxVidget } from "./Vidget.slyled";

class Vidget extends React.Component {
    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0,
    }

    static propTypes = {
        //
    }

    state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad,
    }

    onLeaveFeedback = (evt) => {
        console.log(evt.target.name);
        this.setState((prevState) => ({
            [evt.target.name]: prevState[evt.target.name] + 1,
        }));
    }

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return Math.round((good*100) / this.countTotalFeedback());
    }

    render() {
        return (
            <BoxVidget>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.onLeaveFeedback}
                    />
                </Section>    

                <Section title="Statistics">
                    {this.countTotalFeedback() === 0
                        ? <Notification message="There is no feedback" />
                        : <Value
                            valueGood={this.state.good}
                            valueNeutral={this.state.neutral}
                            valueBad={this.state.bad}
                            valueTotal={this.countTotalFeedback()}
                            valuePositive={this.countPositiveFeedbackPercentage()}
                        />}                   
                </Section>
            </BoxVidget>
        );
    }
}

export default Vidget;
