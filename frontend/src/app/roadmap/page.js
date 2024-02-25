'use client';
import { RoadMapForm } from "@/components"
import { useState } from 'react';

export default function Roadmap(){
    const [data, setData] = useState({});

    const handleFormSubmit = (e) => {
        setData(e);
    }

    return(
        <main>
            <RoadMapForm onSubmit={handleFormSubmit}/>
            {Object.keys(data).length !== 0 ? (
            <p>{data["Day 1"]["Dinner"]}</p>
            ) : 
            <p>failed</p>}
        </main>
    )
}