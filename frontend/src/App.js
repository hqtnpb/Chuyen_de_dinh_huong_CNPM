// import logo from './logo.svg';
// import './App.css';

import React, { useState } from "react";
function App() {
    const [job, setJob] = useState("");
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem("jobs"));
        return storageJobs;
    });
    const addJob = () => {
        setJobs((prev) => {
            const newJobs = [...prev, job];
            const jsonJobs = JSON.stringify(newJobs);
            localStorage.setItem("jobs", jsonJobs);
            return newJobs;
        });
        setJob("");
    };
    return (
        <div style={{ padding: "20px" }}>
            <input value={job} onChange={(e) => setJob(e.target.value)} />
            <button onClick={addJob}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
