import React from "react";
import ListItem from "./ListItem";

function ItemsList({ items, deleteItem }) {
    return (
        items.map((item, index) =>
            <ListItem key={index} index={index} title={item} deleteItem={deleteItem}/>
        )
    )
}

export default ItemsList;