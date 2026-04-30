"use client";

import { useState } from "react";
import { Header } from "./components/Header";
import { CountContext, CountInitialData } from "./context/CountContext";

export default function Page() {
    const [onlineCount, setOnlineCount] = useState(CountInitialData);

    return (
        <div className="container mx-auto">
            <div className="text-sm mb-20 border-b-2 pb-8 border-b-green-200">
                <h1 className="text-xl">Etapas:</h1>
                <ul className="list-disc list-inside">
                    <li>Criar o CONTEXT - app/contexts/CountsContexto.ts</li>
                    <li>Na página criar o PROVIDER</li>
                    <li>Onde for utilizar (onlineUsers) utilizar o hook useContext</li>
                    <li>Definir a alteração do valor</li>
                    <ul className="list-decimal list-inside ml-5">
                        <li>Criar um useState</li>
                        <li>Atribuir o useState ao provider</li>
                    </ul>
                </ul>
            </div>
            <div>
                <CountContext.Provider value={{ onlineCount, setOnlineCount }}>
                    <Header />
                </CountContext.Provider>
            </div>
        </div>
    );
}