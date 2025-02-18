export const handleCreateGrid = (
  rows: string | undefined,
  cols: string | undefined,
  grid: HTMLDivElement
) => {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => grid.removeChild(item));

  if (!rows || !cols) return;

  grid.style.setProperty("--cols", cols);
  grid.style.setProperty("--rows", rows);

  if (Number(rows) >= 15 || Number(cols) >= 15) {
    grid.style.gridTemplateColumns = `repeat(${cols},36px`;
    grid.style.gridTemplateRows = `repeat(${rows}, 36px)`;
  } else {
    grid.style.gridTemplateColumns = `repeat(${cols}, 50px)`;
    grid.style.gridTemplateRows = `repeat(${rows}, 50px)`;
  }

  for (let i = 0; i < Number(rows) * Number(cols); i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item");
    cell.addEventListener("click", () =>
      cell.classList.contains("selected")
        ? cell.classList.remove("selected")
        : cell.classList.add("selected")
    );
    grid.appendChild(cell);
  }
};
