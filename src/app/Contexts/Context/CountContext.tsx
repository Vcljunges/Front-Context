import { createContext } from "react";

type CountContextType = {
    onlineCount: number;
    setOnlineCount: (n: number) => void;
};

export const CountInitialData = 125;

export const CountContext = createContext<CountContextType>({
    onlineCount: CountInitialData,
    setOnlineCount: () => {},
});
