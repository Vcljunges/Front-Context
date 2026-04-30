import { useContext } from "react";
import { OnlineUsers } from "./OnlineUser";

export const Header = () => {
    // const countContext = useContext(CountContext);

    return (
        <div>
            <h1 className="text-4xl font-bold my-4">Contador utilizado Context</h1>
            <OnlineUsers />
        </div>
    )
};
