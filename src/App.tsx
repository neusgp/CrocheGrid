import React, { useEffect, useRef, useState } from "react";
import { handleCreateGrid } from "./lib/handleCreateGrid";

const background_image = require("./lib/decoration.png");

const MAX_ROWS = 20;
const MAX_COLS = 30;

export const App = () => {
  const [x, setX] = useState<string | undefined>();
  const [y, setY] = useState<string | undefined>();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const gridContainer = ref.current;
    if (!gridContainer) return;

    if (Number(y) > MAX_COLS || Number(x) > MAX_ROWS) return;

    handleCreateGrid(x, y, gridContainer);
  }, [x, y]);

  const isInvalidValue = Number(y) > MAX_COLS || Number(x) > MAX_ROWS;

  return (
    <>
      <img
        className="background-image"
        src={background_image}
        alt="background decoration"></img>
      <div className="app">
        <header>
          <h1>CrocheGrid</h1>
          <div className="settings">
            <div className="input-fields">
              <div className="input-field">
                <label>Columns</label>
                <input
                  type="number"
                  min={0}
                  max={30}
                  name="columns"
                  onChange={(e) => {
                    setY(e.target.value);
                  }}></input>
              </div>
              <div className="input-field">
                <label>Rows</label>
                <input
                  type="number"
                  min={0}
                  max={20}
                  name="rows"
                  onChange={(e) => setX(e.target.value)}></input>
              </div>
            </div>
            {isInvalidValue && (
              <p className="validation-hint">
                Please enter an equal or lower value than 30 for columns and 20
                for rows
              </p>
            )}
          </div>
        </header>
        <div className="grid">
          <div id="grid-container" ref={ref}></div>
        </div>
        {/* <div onClick={() => window.print()}>Print</div> */}
      </div>
    </>
  );
};
