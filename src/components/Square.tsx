import React, { useEffect } from "react";
import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    // キャンバスを作成して#squareの子に配置する
    p.createCanvas(p.windowWidth / 2, p.windowHeight / 2).parent("square");
  };
  let bg = ["#dcdcdc"];
  p.draw = () => {
    p.clear();
    // p.background(bg);

    p.strokeWeight(1);
    p.smooth();

    let cells = 50;
    let offset = p.width / 20;
    let margin = offset / 1.5;
    let w = (p.width - offset * 2 - margin * (cells - 1)) / cells;
    let h = (p.height - offset * 2 - margin * (cells - 1)) / cells;

    let startX = offset * 5;
    let endX = p.width - offset * 5;

    for (let i = offset; i < p.height - offset * 1.4; i += 4) {
      noiseLine(p, startX, i, endX, i);
    }

    p.stroke(10);
  };
};
const noiseLine = (p: p5, x1: number, y1: number, x2: number, y2: number) => {
  let s_col = ["#000000"];

  p.stroke(141, 238, 109);
  p.strokeWeight(0.3);
  let step = 10;
  let lastx = -999;
  let lasty = -999;
  let ynoise = p.random(10);
  let y;

  for (let x = x1; x <= x2; x += step) {
    y = y1 + p.noise(ynoise) * 10;
    if (lastx > -999) {
      p.line(x, y, lastx, lasty);
    }
    lastx = x;
    lasty = y;
    ynoise += 0.1;
  }
};

const Square: React.FC = () => {
  useEffect(() => {
    new p5(sketch);
  }, []);

  return (
    // idをsquareに指定する
    <div id="square" />
  );
};

export default Square;
