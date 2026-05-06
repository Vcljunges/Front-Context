import { useUserProfile } from "./Context/PostsContext";
import { useState } from "react";

export const PostList = () => {
    const { posts, removePost, updatePost } = useUserProfile();
    const [editId, setEditId] = useState<number | null>(null);
    const [editTitle, setEditTitle] = useState("");
    const [editBody, setEditBody] = useState("");

    const handleEdit = (id: number, title: string, body: string) => {
        setEditId(id);
        setEditTitle(title);
        setEditBody(body);
    }

    const handleSave = () => {
        if (editId !== null) {
            updatePost(editId, editTitle, editBody);
            setEditId(null);
        }
    }

    return (
        <div className="mt-10">
            {posts.map((item) => (
                <div className="p-3 border-b border-gray-500" key={item.id}>
                    {editId === item.id ? (
                        <div className="flex flex-col gap-2">
                            <input 
                                className="text-xl font-bold p-1 bg-gray-800 text-white border border-blue-500 rounded"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                            />
                            <textarea 
                                className="text-lg p-1 bg-gray-800 text-white border border-blue-500 rounded h-24"
                                value={editBody}
                                onChange={(e) => setEditBody(e.target.value)}
                            />
                            <div className="flex justify-end gap-3 mt-2">
                                <button className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-green-700" onClick={handleSave}>Salvar</button>
                                <button className="bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-700" onClick={() => setEditId(null)}>Cancelar</button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="text-xl font-bold mb-2">
                                {item.title}
                            </div>
                            <div className="text-lg mt-3 mb-2">
                                {item.body}
                            </div>
                            <div className="flex justify-end gap-3">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700" onClick={() => handleEdit(item.id, item.title, item.body)}>Editar</button>

                                <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-700" onClick={() => removePost(item.id)}>Remover</button>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};
