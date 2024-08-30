import React, { useEffect, useState } from 'react';

export const AnimatedText = ({ texts, fontSize }) => {
    const [words, setWords] = useState([]);
    const [isRestarting, setIsRestarting] = useState(false);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        // Clear the text and restart the animation
        setWords([]);
        setIsRestarting(false);
        setCurrentTextIndex(0);

        const wordArray = texts[currentTextIndex].split('');
        const timeouts = [];

        wordArray.forEach((word, index) => {
            timeouts.push(
                setTimeout(() => {
                    setWords(prevWords => [...prevWords, word]);
                    if (index === wordArray.length - 1) {
                        setTimeout(() => {
                            setIsRestarting(true);
                        }, 1000);
                    }
                }, index * 100)
            );
        });

        return () => timeouts.forEach(timeout => clearTimeout(timeout));
    }, [texts, currentTextIndex]);

    useEffect(() => {
        if (isRestarting) {
            setWords([]);
            setIsRestarting(false);
            setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
        }
    }, [isRestarting, texts.length]);

    return (
        <div style={{ height: fontSize }} className='p-15'>
            <h1>
                {words.map((word, index) => (
                    <span key={index} className='animated-word' style={{ fontSize: fontSize }}>
                        {word}
                    </span>
                ))}
            </h1>
        </div>
    );
};
