import { useState } from "react";

export default function ShowHide() {
  const [isVisible, setIsVisible] = useState(true); // State untuk show/hide card

  const toggleCard = () => {
    setIsVisible(!isVisible); // Mengubah nilai state
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <button onClick={toggleCard} style={{ marginBottom: "10px", padding: "10px 20px", fontSize: "16px" }}>
        {isVisible ? "Hide Card" : "Show Card"}
      </button>

      {isVisible && (
        <div style={{ marginTop: "20px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", background: "#f9f9f9" }}>
          <h2>Card Title</h2>
          <p>This is the content of the card. You can add more details here.</p>
        </div>
      )}
    </div>
  );
}

