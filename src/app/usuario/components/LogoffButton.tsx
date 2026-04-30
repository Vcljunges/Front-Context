"use client";

import { useUserProfile } from "../context/UserProfileContext";

export function LogoffButton() {
  const { userName, setUserName } = useUserProfile();

  if (!userName) return null;

  return (
    <button
      onClick={() => setUserName("")}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
    >
      Logoff
    </button>
  );
}
