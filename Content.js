import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa"

const Content = () => {
    const [items, setItems] = useState([
        {   id:1,
            checked:true,
            item: "Practise coding"
        },
        {   id:2,
            checked:false,
            item: "Play Shuttle"
        },
        {   id:3,
            checked:false,
            item: "Study AI"
        }
    ]);

    const handleCheck = (id) => {
        console.log(`id: ${id}`);
        const listItems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item);
        setItems(listItems);
        localStorage.setItem("todo_list", JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        console.log(`id: ${id}`);
        const listItems = items.filter((item) => item.id!==id);
        setItems(listItems);
        localStorage.setItem("todo_list", JSON.stringify(listItems));
    }
    
    return (
        <main>
            <ul>
                {items.map((item) => 
                (
                    <li className="item" key={item.id}>
                        <input type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked}/>
                        <label onDoubleClick={() => handleCheck(item.id)} class="pointer" style={item.checked?{textDecoration:'line-through'}:null}>{item.item}</label>
                        <FaTrashAlt role="button" onClick={() => handleDelete(item.id)} tabIndex="0"/>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Content