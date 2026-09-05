import { useAuth } from "../context/AuthContext";

function PremiumTest() {
  const { subscription, isPremium } = useAuth();

  return (
    <main style={{ padding: "40px" }}>
      <h1>Premium Test</h1>

      <p>
        Congratulations! You have access to premium content.
      </p>

      <p>
        Premium status:{" "}
        <strong>
          {isPremium ? "Active" : "Inactive"}
        </strong>
      </p>

      <p>
        Plan:{" "}
        <strong>
          {subscription?.plan || "Unknown"}
        </strong>
      </p>
    </main>
  );
}

export default PremiumTest;