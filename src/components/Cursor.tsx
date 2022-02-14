import React, { useEffect } from "react";
import p5 from "p5";

const sketch = (p: p5) => {
  let canvasSize = p.windowWidth / 2;
  p.setup = () => {
    // キャンバスを作成して#squareの子に配置する
    p.createCanvas(canvasSize, canvasSize).parent("cursor");
  };
  let bg = ["#dcdcdc"];
  p.draw = () => {
    p.clear();

    //p.background(bg);
    let cells = 20;
    let offset = p.windowWidth / 20;
    let margin = offset / 1.5;
    let w = (canvasSize - offset * 2 - margin * (cells - 1)) / cells;
    let h = (canvasSize - offset * 2 - margin * (cells - 1)) / cells;

    let lNoise = p.random(10);

    for (let j = 0; j < cells; j++) {
      for (let i = 0; i < cells; i++) {
        let x = offset + i * (w + margin);
        let y = offset + j * (h + margin);

        let d = w;

        let angle = p.atan2(p.mouseY - y, p.mouseX - x);
        //length=2+noise(lNoise)*8
        let length = 6;

        p.push();
        p.translate(x, y);
        p.rotate(angle);
        p.stroke(255, 255, 255);
        p.line(-length / 2, -length / 2, length / 2, length / 2);
        p.pop();
      }
    }
  };
};

const Cursor: React.FC = () => {
  useEffect(() => {
    new p5(sketch);
  }, []);

  return (
    // idをsquareに指定する
    <div id="cursor" />
  );
};

export default Cursor;
