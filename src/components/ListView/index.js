import React from "react";
import ListItem from '../ListItem';
import { useGlobalContext } from "../../utils/GlobalState";;


const ListView = (props) => {

    // eslint-disable-next-line no-unused-vars
    const [globalStore, dispatch] = useGlobalContext();

    // console.log({globalStore, dispatch});

return (
    <div>
        <ListItem />
    </div>
)
}

export default ListView;