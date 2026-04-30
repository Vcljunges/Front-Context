"use client";

import { useState } from "react";
import { Header } from "./components/Header";
import { UserProfileProvider } from "./context/UserProfileContext";

export default function Page() {
  const [userName, setUserName] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleLogin = () => {
    if (inputValue.trim()) {
      setUserName(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="container mx-auto">
      <div className="text-sm mb-20 border-b-2 pb-8 border-b-green-200">
        <h1 className="text-xl">Etapas:</h1>
        <p>
          Criar um contexto que armazena o nome do usuario logado. Colocar um
          botao para permitir fazer o logout do usuario (nome=&rsquo;&rsquo;)
        </p>
        <ul className="list-disc list-inside mt-5">
          <li>Criar um context</li>
          <li>Exibir o nome do usuario logado</li>
          <li>Se fez logoff nao exibir o botao</li>
        </ul>
      </div>

      <UserProfileProvider userName={userName} setUserName={setUserName}>
        <div>
          {!userName && (
            <div className="flex items-center gap-4 mb-5">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                placeholder="Digite o nome de usuario"
                className="border-2 border-slate-500 px-2 py-1"
              />
              <button
                onClick={handleLogin}
                className="bg-slate-500 text-white px-4 py-1 hover:bg-blue-400 cursor-pointer transition"
              >
                Logar
              </button>
            </div>
          )}
          <Header />
        </div>
      </UserProfileProvider>
    </div>
  );
}
