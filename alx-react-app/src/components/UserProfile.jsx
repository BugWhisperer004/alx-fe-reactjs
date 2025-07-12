const UserProfile = (props) => {
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            maxWidth: "300px",
            margin: "20px auto",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
        }}>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>{props.bio}</p>
        </div>
    );
};

export default UserProfile;
