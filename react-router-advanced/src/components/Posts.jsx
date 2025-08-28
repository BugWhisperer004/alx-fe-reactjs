import { Link } from 'react-router-dom';

const demo = [
    { id: '1', title: 'Hello World' },
    { id: '2', title: 'React Router Tips' },
];

export default function Posts() {
    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {demo.map(p => (
                    <li key={p.id}>
                        <Link to={`/posts/${p.id}`}>{p.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
