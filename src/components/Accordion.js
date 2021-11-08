import React, {useState} from 'react';

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null)

    const onTitleClick = (index) => {
       setActiveIndex(index)
    }

    const accordionItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : ''
        return (
            <React.Fragment key={item.id}>
                <div 
                  className={`title ${active}`}
                  onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    return <div className="ui styled accordion">
            {accordionItems}            
           </div>
}


export default Accordion
