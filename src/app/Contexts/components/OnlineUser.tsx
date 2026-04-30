import { useContext } from "react";
import { CountContext } from "../Context/CountContext";

export const OnlineUsers = () => {
    const { onlineCount, setOnlineCount } = useContext(CountContext);

    const handleButtonClick = () => {
        setOnlineCount(onlineCount + 1);
    }

    return (
        <div>
            <p>Online: {onlineCount} usuários</p>
            <button onClick={handleButtonClick} className="bg-blue-400 border-blue-700 cursor-pointer px-4 py-1 mt-10 hover:bg-blue-200">Alterar valor</button>
        </div>
    );
};