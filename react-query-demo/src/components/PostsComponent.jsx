import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data;
};

export default function PostsComponent() {
    const {
        data,
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        cacheTime: 1000 * 60 * 5, // 5 minutes
        staleTime: 1000 * 30, // 30 seconds
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });

    if (isLoading) return <p>Loading...</p>;

    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2 className="text-xl font-bold">Posts</h2>
            <button
                onClick={() => refetch()}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
                Refetch Posts
            </button>
            <ul className="list-disc ml-5 mt-4">
                {data?.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

