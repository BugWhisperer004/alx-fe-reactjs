import { useParams } from 'react-router-dom';

export default function Post() {
    const { postId } = useParams();
    // In a real app you would fetch the post by ID.
    return (
        <div>
            <h2>Post {postId}</h2>
            <p>This is the content for post with id: {postId}</p>
        </div>
    );
}
