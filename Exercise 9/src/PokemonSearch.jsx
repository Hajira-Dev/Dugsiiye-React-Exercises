import { useState, useEffect } from "react";

const GitHubProfileFinder = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Print the error in the console each time "errorMessage" is updated
  useEffect(() => {
    if (errorMessage) {
      console.error("Could not load the GitHub profile:", errorMessage);
    }
  }, [errorMessage]);

  const findUser = async () => {
    if (!username) return;

    setIsLoading(true);
    setErrorMessage("");
    setProfile(null);

    try {
      // Wait one second before sending the request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const res = await fetch(
        `https://api.github.com/users/${username.toLowerCase()}`,
      );

      if (!res.ok) {
        throw new Error("No GitHub account with that username");
      }

      const result = await res.json();
      setProfile(result);
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>GitHub User Search</h2>
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={findUser}>Search</button>

      {isLoading && <p>Loading...</p>}
      {errorMessage && <p style={{ color: "red" }}>Error: {errorMessage}</p>}

      {profile && (
        <div style={{ marginTop: "1rem" }}>
          <h3>{profile.name || profile.login}</h3>
          <img
            src={profile.avatar_url}
            alt={profile.login}
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <p>Location: {profile.location || "N/A"}</p>
          <p>Public Repos: {profile.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default GitHubProfileFinder;
