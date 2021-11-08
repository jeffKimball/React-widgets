import React from 'react';
import Accordion from './components/Accordion'

const items = [
    {
        id: 111,
        title: "What is react?",
        content: "React is a front end JavaScript Framework"
    },
    {
        id: 222,
        title: "Why use React",
        content: "React is the sexy new framework everyone wants"
    },
    {
        id: 333,
        title: "How do you use React",
        content: "You use React by creating components"
    }
    
]

export default () => {
    return <div>
            <Accordion items={items}/>
           </div>
}