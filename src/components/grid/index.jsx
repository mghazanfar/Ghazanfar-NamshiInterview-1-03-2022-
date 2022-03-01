import { useState } from "react";

const gridItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
export const Grid = () => {
    const [selected, setSelected] = useState([])
  return (
    <div class="grid-container">
      {gridItems.map((item) => (
        <div class={`grid-item ${selected.includes(item) ? "selected" : ""}`} key={item} onClick={() => setSelected([selected[1],item])}>
          {item}
        </div>
      ))}
    </div>
  );
};
