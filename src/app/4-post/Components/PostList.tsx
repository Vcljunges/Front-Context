import { useUserProfile } from "./Context/PostsContext";

export const PostList = () => {
    const { posts, removePost } = useUserProfile();

    return (
        <div className="mt-10">
            {posts.map((item) => (
                <div className="p-3 border-b border-gray-500" key={item.id}>
                    <div className="text-xl font-bold mb-2">
                        {item.title}
                    </div>
                    <div className="text-lg mt-3 mb-2">
                        {item.body}
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-700" onClick={() => removePost(item.id)}>Remover</button>
                    </div>
                </div>
            ))}
        </div>
    );
};
