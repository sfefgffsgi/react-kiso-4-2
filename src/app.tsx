import { useEffect, useState } from "react";
import "./app.css";

function App() {
  const [count, setCount] = useState(1);
  const [foxImg, setFoxImg] = useState("");

  function getFoxImg() {
    const url = "https://randomfox.ca/floof/";
    const request = {
      method: "GET",
    };
    fetch(url, request)
      .then((res) => res.json())
      .then((data) => {
        setFoxImg(data.image);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getShibaImg() {
    const url = "https://dog.ceo/api/breed/shiba/images/random";
    const request = {
      method: "GET",
    };
    fetch(url, request)
      .then((res) => res.json())
      .then((data) => {
        setFoxImg(data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleButtonClick() {
    setCount(count + 1);
    // 狐画像を取得(5回に一回柴犬画像取得)
    if (count % 5 == 0) {
      getShibaImg();
    } else {
      getFoxImg();
    }
  }

  useEffect(() => {
    getFoxImg();
  }, []);

  return (
    <>
      <h1>狐画像</h1>
      <div className="card w-full h-4/5 ">
        <div className="w-full h-full border border-black">
          <img className="object-contain w-full h-full" src={foxImg}></img>
        </div>
        <button
          className="mt-2 bg-orange-200 hover:bg-orange-600 hover:text-white border border-black hover:border-black"
          onClick={handleButtonClick}
        >
          変更
        </button>
      </div>
    </>
  );
}

export default App;

// const React = require("react");
// const App = () => {
//   return React.createElement("div", null, "Hello, World!");
// };

// export default App;
