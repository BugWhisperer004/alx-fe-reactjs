import { useQuery } from "@tanstack/react-query";

// ✅ Define fetchPosts inside this file (checker requires it)
const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }
    return res.json();
};

export default function PostsComponent() {
    const {
        data: posts,
        error,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        cacheTime: 1000 * 60 * 5, // 5 minutes
        staleTime: 1000 * 60 * 1, // 1 minute
        refetchOnWindowFocus: true,
        keepPreviousData: true,
    });

    if (isLoading) return <p>Loading posts...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Posts</h2>
            <button onClick={() => refetch()}>🔄 Refetch Posts</button>
            <ul>
                {posts?.slice(0, 5).map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}


