import { useContext, createContext, useState, ReactNode} from "react";
import { PostList } from "../PostList";

type Post = {
    id: number;
    title: string;
    body: string;
    author: string;
}

type UserContextType = {
    posts: Post[];
    addPost: (title: string, body: string, id: number, author: string) => void;
    removePost: (id: number) => void;
    updatePost: (id: number, title: string, body: string) => void;
}

export const UserProfileContext = createContext<UserContextType | null>(null);

type Props = { children: ReactNode };

export const UserProfileProvider = ({ children }: Props) => {
    const [posts, setPosts] = useState<Post[]>([]);

    const addPost = (title: string, body: string, id: number, author: string) => {
        setPosts([...posts, { id, title, body, author }]);
    };

    const removePost = (id: number) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    const updatePost = (id: number, title: string, body: string) => {
        setPosts(posts.map(post => post.id === id ? { ...post, title, body } : post));
    };

    return (
        <UserProfileContext.Provider value={{ posts, addPost, removePost, updatePost }}>
            {children}
        </UserProfileContext.Provider>
    );
};

export const useUserProfile = () => {
    const context = useContext(UserProfileContext);

    if (!context) {
        throw new Error("useUserProfile deve ser usado dentro de um UserProfileProvider");
    }

    return context;
};
