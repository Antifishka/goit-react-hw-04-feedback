import React from "react";
import { Global } from '@emotion/react' // connection Global Styles
import { GlobalStyles } from './GlobalStyles';
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Value } from "./Value/Value";
import { BoxVidget } from "./Vidget.slyled";
import { useState, useEffect } from "react";

export function Vidget() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onLeaveFeedback = (evt) => {
        console.log(evt.target.name);
        const { name } = evt.target;

        switch (name) {
            case 'good':
                setGood(prevState => prevState + 1,);
                break;
            case 'neutral':
                setNeutral(prevState => prevState + 1,);
                break;
            case 'bad':
                setBad(prevState => prevState + 1,);
                break;
            default:
                return;
        }
    }                                                                               

    // useEffect(() => {
    //     const totalFeedback = good + neutral + bad;
    // }, [good, neutral, bad]);

    // useEffect(() => {
    //     const PositiveFeedbackPercentage = Math.round((good * 100) / totalFeedback);
    // }, [good]);

    return (
        <BoxVidget>
            <Global styles={GlobalStyles} />
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={Object.keys(this.state)}
                    onLeaveFeedback={onLeaveFeedback}
                />
            </Section>    

            <Section title="Statistics">
                {this.countTotalFeedback() === 0
                    ? <Notification message="There is no feedback" />
                    : <Value
                        valueGood={good}
                        valueNeutral={neutral}
                        valueBad={bad}
                        // valueTotal={}
                        // valuePositive={this.countPositiveFeedbackPercentage()}
                    />}                   
            </Section>
        </BoxVidget>
    );
      
}



class OldVidget extends React.Component {
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
                <Global styles={GlobalStyles} />
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
