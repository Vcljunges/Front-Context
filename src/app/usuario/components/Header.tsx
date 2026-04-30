"use client";

import { useUserProfile } from "../context/UserProfileContext";
import { LogoffButton } from "./LogoffButton";

export function Header() {
  const { userName } = useUserProfile();

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      {userName ? (
        <>
          <span className="text-gray-700">Olá, <strong>{userName}</strong>!</span>
          <LogoffButton />
        </>
      ) : (
        <span className="text-gray-500">Nenhum usuário logado.</span>
      )}
    </header>
  );
}
