'use client'

import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { PostList } from "./Components/PostList";
import { UserProfileProvider } from "./Components/Context/PostsContext";

export default function Page() {
    return (
        <div className="min-h-screen container mx-auto">
            <div className="text-sm mb-20 border-b-2 pb-8 border-b-green-200">
                <h1 className="text-xl">Etapas:</h1>
                <p>Criar um context para armazenar uma lista de post.
                    <br/>Exibir estes posts.
                    <br/>Exibir o total de posts.
                </p>
            </div>
            <div className="flex-1 flex-col items-center justify-center">
                <UserProfileProvider>
                    <Header/>
                    <PostList/>
                    <Footer/>
                </UserProfileProvider>
            </div>
        </div>
    );
};
