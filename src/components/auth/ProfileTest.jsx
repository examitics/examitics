import { useAuth } from "../../context/AuthContext";

function ProfileTest() {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>Not logged in.</p>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>Profile Test</h2>

      <p>
        <strong>User Email:</strong>{" "}
        {user.email}
      </p>

      <p>
        <strong>Profile Email:</strong>{" "}
        {profile?.email}
      </p>

      <p>
        <strong>Role:</strong>{" "}
        {profile?.role}
      </p>

      <p>
        <strong>Full Name:</strong>{" "}
        {profile?.full_name || "Not set"}
      </p>

      <p>
        <strong>User ID:</strong>{" "}
        {user.id}
      </p>

      <p>
        <strong>Profile ID:</strong>{" "}
        {profile?.id}
      </p>
    </div>
  );
}

export default ProfileTest;