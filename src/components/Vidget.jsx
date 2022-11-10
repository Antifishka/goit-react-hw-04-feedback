import React from "react";
import { Global } from '@emotion/react' // connection Global Styles
import { GlobalStyles } from './GlobalStyles';
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Value } from "./Value/Value";
import { BoxVidget } from "./Vidget.slyled";
import { useState } from "react";

export function Vidget() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const options = { good, neutral, bad };

    const onLeaveFeedback = (evt) => {
        console.log(evt.target.name);
        const { name } = evt.target;

        switch (name) {
            case 'good':
                setGood(prevState => prevState + 1);
                break;
            case 'neutral':
                setNeutral(prevState => prevState + 1);
                break;
            case 'bad':
                setBad(prevState => prevState + 1);
                break;
            default:
                return;
        }
    }  
    
    const totalFeedback = Object.values(options).reduce((total, value) => (total += value),
    0);

    const positiveFeedbackPercentage = () => { 
        return Math.round((good*100) / totalFeedback);
    }

    return (
        <BoxVidget>
            <Global styles={GlobalStyles} />
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={Object.keys(options)}
                    onLeaveFeedback={onLeaveFeedback}
                />
            </Section>    

            <Section title="Statistics">
                {totalFeedback === 0
                    ? <Notification message="There is no feedback" />
                    : <Value
                        valueGood={good}
                        valueNeutral={neutral}
                        valueBad={bad}
                        valueTotal={totalFeedback}
                        valuePositive={positiveFeedbackPercentage()}
                    />}                   
            </Section>
        </BoxVidget>
    );
      
}

export default Vidget;
