import { useUserProfile } from './Context/PostsContext';

export const Footer = () => {
    const postContext = useUserProfile();

    return (
        <div className='mt-6 p-6 border-t-2 border-gray-700'>
            <p>Total de post: {postContext?.posts.length}</p>
        </div>
    );
}
