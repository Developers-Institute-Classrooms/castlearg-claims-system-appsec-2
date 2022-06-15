import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(false);
                const result = await fetch(`${process.env.REACT_APP_API_URL}/messages`);
                if (!result.ok) {
                    throw new Error('Flagrant API Error');
                }
                const messages = await result.json();
                setMessages(messages)

            } catch (error) {
                setError(true);

            } finally {
                setLoading(false);
            }
        }
        fetchData();

    }, [])
    return (
        <Fragment>
            <Header/>
        </Fragment>
    );
}

export default App;
