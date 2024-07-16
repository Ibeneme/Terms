import React, { useState } from "react";

const DeletePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://oberon.neofin.ng/profile/delete-organization/",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const responseData = await response.json();

      if (responseData.message === "Account deleted successfully") {
        setEmail("");
        setPassword("");
        setMessage("Account deleted successfully!");
      } else {
        setMessage("Please check your credentials.");
      }
    } catch (error) {
      setMessage("Please check your credentials.");
      // Handle the error as needed
    }
  };

  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          padding: "20px",
          textAlign: "center",
          marginTop: 120,
        }}
      >
        <h2
          style={{
            color: "#fff",
            fontSize: 24,
            backgroundColor: "transparent",
          }}
        >
          Delete Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                fontFamily: "var(--fontFamily)",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid #ccc",
                maxWidth: 300,
                backgroundColor: "#ffffff12",
                padding: 24,
                fontSize: 16,
                color: "#fff",
              }}
              placeholder="Enter an Email"
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label
              htmlFor="password"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter a Password"
              style={{
                fontFamily: "var(--fontFamily)",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid #ccc",
                maxWidth: 300,
                backgroundColor: "#ffffff12",
                padding: 24,
                fontSize: 16,
                color: "#fff",
              }}
            />
          </div>
          <div style={{ width: "100%" }}>
            <button
              type="submit"
              style={{
                padding: "24px",
                backgroundColor: "#216FED",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                alignContent: "flex-end",
                width: 345,
                marginTop: 48,
                fontFamily: "var(--fontFamily)",
                fontSize: 16,
              }}
            >
              Delete Account
            </button>
          </div>
        </form>
        {message && (
          <p
            style={{
              marginTop: "20px",
              color:
                message === "Account deleted successfully!"
                  ? "#216FED"
                  : "#216FED",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default DeletePage;
