import React, { useEffect } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/css/reveal.css';
import revealOptions from './revealOptions';

export default function Deck({ options, children }) {
    useEffect(() => {
        Reveal.initialize({ ...revealOptions, ...options });
    });
    return (
        <div className="reveal">
            <div className="slides">
                {children}
            </div>
        </div>
    )
}
