import React, { useState } from 'react';

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);


    const onTitleClick = (index) =>{
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) =>{
        // make a variable active if the index is equal to active index set the active to 'active'
        // otherwise set it to nothing
        const active = index === activeIndex ? 'active' : '';
        // console.log(`${index} has index = ${active}, the selected index is ${activeIndex}` )
        // if (index === activeIndex) {
        //     // eslint-disable-next-line no-unused-vars
        //     active = 'active'
        // }

        return(
         <React.Fragment key={item.title}>
             <div
                 // className={"title" + active}
                 className={`title ${active}`}
                 // onClick={() => console.log('Tile clicked ', index)}
                 onClick={() => onTitleClick(index)}
             >
                 <icon className="dropdown icon"/>
                 {item.title}
             </div>
             <div className={`content ${active}`}>
                 <p>{item.content}</p>
             </div>
         </React.Fragment>
        )
    });

    return <div className="ui style accordion">
        {renderedItems}
        {/*<h1>{activeIndex}</h1>*/}
    </div>;
};

export default Accordion;