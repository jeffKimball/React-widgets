import React, {useState} from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

const items = [
    {
        id: 111,
        title: "What is react?",
        content: "React is a front end JavaScript framework"
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

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color blue',
        value: 'blue'
    },
    {
        label: 'The color green',
        value: 'green'
    }
]

export default () => {
    const [selected, setSelected] = useState(options[0])

    return <div className="ui container">
            <Dropdown 
                selected={selected} 
                onSelectedChange={setSelected}
                options ={options}/>
           </div>
}