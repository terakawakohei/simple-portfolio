import React, { useEffect, useState } from "react";
import Square from "./components/Square";
import Cursor from "./sketch/Cursor";
import logo from "./portfolio-icon.png";
import "./App.css";
import "./css/pointer.css";
import "./css/appContent.css";
import Contents from "./components/Contents";
import Timer from "./components/timer";
function App() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  //初回のみ実行
  useEffect(() => {
    //ここの処理が初回に行われる
    //イベントリスナの登録
    const mouseMoveListener = (event: MouseEvent) => {
      setMouseX(event.x);
      setMouseY(event.y);
    };
    //EventTarget.addEventListener()
    //特定のイベント（ここではmousemove）がwindowに配信されるたびに呼び出される関数を設定
    //マウスを動かすたびに、HookStateにマウスの座標を登録
    window.addEventListener("mousemove", mouseMoveListener);

    return () => window.removeEventListener("mousemove", mouseMoveListener);
  }, []);
  return (
    <div className="App">
      <div
        className="pointer"
        style={{ transform: `translate(${mouseX}px,${mouseY}px)` }}
      ></div>
      <div className="sketch">
        <Cursor />
      </div>
      <div className="content">
        {" "}
        <Contents />
      </div>
      {/* <Timer /> */}

    </div>
  );
}

export default App;
