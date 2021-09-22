import React from 'react'
import EachCard from './eachCard'

export default function Cards({ termResults }) {
    console.log(termResults);

    return (

        <div>
            {termResults.map((eachItem) => (
                <EachCard eachItem={eachItem} />
            ))}
        </div>
    )
}