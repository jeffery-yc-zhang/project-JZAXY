import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const listing = { title, description, imageUrl };

    try {
      const response = await fetch("/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(listing),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      console.log("Success:", result);
      // Reset form or handle success (e.g., redirect or show a success message)
    } catch (error) {
      console.error("Error:", error.message);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <>
    <h1 className="center"> Create a Listing</h1>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
      }}
    >

      
      <form
        onSubmit={handleSubmit}
        style={{ width: "300px", display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          placeholder="School Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ margin: "10px 0", padding: "10px" }}
        />
        <textarea
          placeholder="About"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ margin: "10px 0", padding: "10px" }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            setImageUrl(URL.createObjectURL(file));
          }}
          style={{ margin: "10px 0", padding: "10px" }}
        />
        <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default Create;
