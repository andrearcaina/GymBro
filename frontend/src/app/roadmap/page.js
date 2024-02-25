'use client';
import { RoadMapForm, Day } from "@/components"
import { useState } from 'react';

export default function Roadmap(){
    const [data, setData] = useState({});

    const handleFormSubmit = (e) => {
        setData(e);
    }

    return(
        <main>
            {Object.keys(data).length !== 0 ? (
                <center><Day data={data} /></center>
            ) : 
            <RoadMapForm onSubmit={handleFormSubmit}/>}
        </main>
    )
}