import React from 'react';

const Accordion = ({items}) => {
    const accordionItems = items.map((item) => {
        return (
            <div key={item.id}>
                <div className="title active">
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </div>
        )
    })
    return <div>{accordionItems}</div>
}


export default Accordion
