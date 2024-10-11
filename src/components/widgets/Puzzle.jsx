import "./Puzzle.scss";
import piece1 from "./widget-components/puzzle/1.png";
import piece2 from "./widget-components/puzzle/2.png";
import piece3 from "./widget-components/puzzle/3.png";
import piece4 from "./widget-components/puzzle/4.png";
import piece5 from "./widget-components/puzzle/5.png";
import piece6 from "./widget-components/puzzle/6.png";
import piece7 from "./widget-components/puzzle/7.png";
import piece8 from "./widget-components/puzzle/8.png";
import {  useMotionValue, Reorder } from "framer-motion";
import { useRaisedShadow  } from "./use-raised-shadow";
import { useState } from "react";

const Item = ({ item }) => {
    const y = useMotionValue(0);
    const boxShadow = useRaisedShadow(y);

    return (
        <Reorder.Item value={item} id={item} style={{ boxShadow, y }}>
            <span className="">{item}</span>
        </Reorder.Item>
    )
};

const initialItems = ["orange", "banana", "apple", "mango"]

const puzzlePieces = [
    {  
        key:"1",
        alt: "piece1",
        src: piece1
    },
    {
        key:"2",
        alt: "piece2",
        src: piece2,
    },
    {
        key:"3",
        alt: "piece3",
        src: piece3,
    },
    {
        key:"4",
        alt: "piece4",
        src: piece4,
    },
    {
        key:"5",
        alt: "piece5",
        src: piece5,
    },
    {
        key:"6",
        alt: "piece6",
        src: piece6,
    },
    {
        key:"7",
        alt: "piece7",
        src: piece7,
    },
    {
        key:"8",
        alt: "piece8",
        src: piece8,
    },
]

const Puzzle = () => {
    const [items, setItems] = useState(initialItems);
    
    return (
        <div className="puzzle">
            <Reorder.Group axis="y" onReorder={setItems} values={items}>
                {items.map((item, i) => (
                    <Item key={i} item={item} className={`puzzle__piece${i}`} />
                ))}
            </Reorder.Group>
        </div>
    )
}

export default Puzzle