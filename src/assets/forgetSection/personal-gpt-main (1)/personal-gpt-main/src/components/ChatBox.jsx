import { Configuration, OpenAIApi } from 'openai';
import React, { useState } from 'react';
import './chatBox.css';

const config = new Configuration({
    apiKey: "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",
    stream: true,
});
const openai = new OpenAIApi(config);

function ChatBox() {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = async () => {
        setLoading(true);
        try {
            const response = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    { role: 'user', content: prompt }
                ],
                max_tokens: 4096,
                stop: ['\n']
            });

            setResult(response.data.choices[0].message.content);
            setLoading(false);
        } catch (error) {
            setError(error);
            console.log(error);
            setLoading(false);
        }
    };

    const handleClick = async () => {
        setLoading(true);
        await handleChange();
    };

    return (
        <div className="chat-container">
            <textarea
                className="chat-input"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Type your message here"
                cols="30"
                rows="10"
            />
            <button
                className="chat-button"
                onClick={handleClick}
                disabled={loading || !prompt.trim()}
            >
                {loading ? 'Generating....' : 'Generate'}
            </button>
            {result ? (
                <div className="chat-result">
                    <p>{result}</p>
                </div>
            ) : error ? (
                <div className="chat-error">
                    <p>Request exceeded: {error.message} </p>
                </div>
            ) : null}
        </div>
    );
}

export default ChatBox;
