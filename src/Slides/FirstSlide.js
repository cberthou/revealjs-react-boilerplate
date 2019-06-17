import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Lowlight from 'react-lowlight';

const codeExample = `function aFunction() {
    const value = 10;

    return value;
}`;

export default function FirstSlide() {
    return (
        <Slide>
            <h3>Basic application data structures</h3>
            <Lowlight value={codeExample} language="js" />
        </Slide>
    )
}
