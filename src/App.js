import "./styles.css";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useEffect, useState } from "react";

export default function App() {
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {}, []);

  const handleIconClick = () => {
    setIsRotating(true);

    setTimeout(() => setIsRotating(false), 10000);
  };

  return (
    <div className="App">
      <h1>Animated refresh Icon</h1>
      <RefreshIcon
        fontSize="large"
        onClick={handleIconClick}
        sx={{
          color: "blue",
          "@keyframes rotate": {
            from: {
              transform: "rotate(0deg)"
            },
            to: {
              transform: "rotate(360deg)"
            }
          },
          animation: isRotating ? "rotate 1s linear infinite" : "none",
          cursor: "pointer"
        }}
      />
    </div>
  );
}
