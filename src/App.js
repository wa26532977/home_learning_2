import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
    {
        title: "What is React",
        content: "React is a front end javascript framework"
    },
    {
        title: "What is React1",
        content: "React is a front end javascript framework1"
    },
    {
        title: "What is React2",
        content: "React is a front end javascript framework2"
    },

]

const options = [
    {
        label: "the color Red",
        value: 'red'
    },
    {
        label: "the color Green",
        value: "green"
    },
    {
        label: "the color blue",
        value: "blue"
    },
]


export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);
    return (
        <div>
            {/*<Accordion items={items}/>*/}
            {/*<Search />*/}
            <button onClick={() => {
                setShowDropdown(!showDropdown)
            }}>Toggle Dropdown
            </button>
            {showDropdown ?
                <Dropdown
                    selected={selected}
                    options={options}
                    onSelectedChange={setSelected}
                /> : null
            }
        </div>
    );
};