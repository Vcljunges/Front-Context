'use client'

import { useState } from "react";
import { useUserProfile } from "./Context/PostsContext";

export const Header = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { addPost } = useUserProfile();

    const handleAddPost = () => {
        if (!title.trim()) return;
        addPost(title, body, Date.now(), "Usuário Logado");
        setTitle('');
        setBody('');
    };

    return (
        <div>
            <h1 className="text-4xl font-bold my-4">Título do Post</h1>

            <div className="flex flex-col gap-3 border border-dotted border-gray-400 p-3 my-4">
                <input
                    type="text"
                    placeholder="Dígite um título para o Post"
                    className="border border-gray-300 p-2 text-white text-xl bg-zinc-950"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Digite o conteúdo"
                    className="h-24 border border-gray-300 p-2 text-white text-xl bg-zinc-950"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700"
                    onClick={handleAddPost}
                >
                    Adicionar
                </button>
            </div>
        </div>
    );
};
