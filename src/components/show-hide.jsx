import { useState } from "react";

export default function ShowHide() {
  const [isVisible, setIsVisible] = useState(true); // State untuk show/hide card

  const toggleCard = () => {
    setIsVisible(!isVisible); // Mengubah nilai state
  };

  return (
    <div>
      <button onClick={toggleCard}>
        {isVisible ? "Hide Card" : "Show Card"}
      </button>

      {isVisible && (
        <div>
          <h2>Card Title</h2>
          <p>This is the content of the card. You can add more details here.</p>
        </div>
      )}
    </div>
  );
}

