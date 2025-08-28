import { useQuery } from "@tanstack/react-query";

export default function PostsComponent() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            return res.json();
        },
        // Required caching options
        cacheTime: 1000 * 60 * 5, // keep data in cache for 5 minutes
        staleTime: 1000 * 30, // data considered fresh for 30 seconds
        refetchOnWindowFocus: true, // refetch when window regains focus
        keepPreviousData: true, // keep old data while fetching new
    });

    if (isLoading) return <p>Loading posts...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Posts</h2>
            <ul className="space-y-2">
                {data.map((post) => (
                    <li key={post.id} className="p-2 border rounded">
                        <h3 className="font-semibold">{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}


