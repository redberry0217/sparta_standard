import { useState } from "react";
import './App.css';

function App() {
  const initialArray = [
    'apple',
    'banana',
    'cherry',
    'date',
    'elderberry',
  ];

  const [array, setArray] = useState(initialArray); //state, state를 제어하는 함수를 반환
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  /** 필요한 함수들 */
  const handleForEach = () => {
    let tempResult = "";
    array.forEach(function (fruit, index) {
      tempResult += `${index}: ${fruit}, `;
    });
    setResult(tempResult.slice(0, -2));
  };

  const handleFilter = () => {
    const filteredList = array.filter(function(fruit) {
      if (fruit.includes(query)) {
        return true;
      } else {
        return false;
      }
    });
    setResult(filteredList.join(", "));
  }

  const handleMap = () => {
    const mappedList = array.map(function(fruit) {
      return fruit.toUpperCase();
    });
    setResult(mappedList.join(", "));
  }

    const handleReduce = () => {
      const reducedListText = array.reduce(function (acc, cur) {
        return `${acc} + ${cur}`;
      });
      setResult(reducedListText);
    };

    const handlePush = () => {
      if (!query) {
        alert("입력값이 없습니다");
        return false;
      }
      const newArr = [...array, query];
      setArray(newArr);
      setResult(newArr.join(", "));
    };

    const handlePop = () => {
      const newArr = [...array];
      newArr.pop();
      setArray(newArr);
      setResult(newArr.join(", "));
    };

    const handleSlice = () => {
      setResult(array.slice(1, 4).join(", "));
    }

    const handleSplice = () => {
      const newArr = [...array];
      newArr.splice(2, 2, "kiwi", "lime");
      setArray(newArr);
      setResult(newArr.join(", "));
    }

    const handleIndexOf = () => {
      if (!query) {
        alert("입력값이 없습니다");
        return false;
      }
      setResult(array.indexOf(query));
    }

    const handleIncludes = () => {
      if (!query) {
        alert("입력값이 없습니다");
        return false;
      }
      setResult(array.includes(query) ? "true" : "false");
    }

    const handleFind = () => {
      if (!query) {
        alert("입력값이 없습니다");
        return false;
      }
      const foundElement = array.find((e) => e.includes(query));

      if (foundElement !== undefined) {
        setResult(array.find((e) => e.includes(query)));
      } else {
        setResult("Not found");
      }
    }

    const handleSome = () => {
      if (!query) {
        alert("입력값이 없습니다");
        return false;
      }
      setResult(array.some((e) => e.includes(query)) ? "true" : "false");
    }

    const handleEvery = () => {
      setResult(array.every((e)=> e.length > 5) ? "true" : "false");
    }

    const handleSort = () => {
      const sortedArr = [...array].sort((a, b) => a.localeCompare(b));
      console.log(sortedArr);
      setResult(sortedArr.join(", "));
    }

  return (
    <div>
      <h1>Standard반 배열 API</h1>
      <div>
        <input value={query}
               placeholder="Enter text"
               onChange={function(event) {
          setQuery(event.target.value)}}/>
      </div>
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button>join</button>
      </div>
      <div className="box">
        <strong>원본배열 : </strong> {array.join(", ")}
      </div>
      <div className="box">
        <strong>결과물 :</strong> {result}
      </div>
    </div>
  );
}

export default App;
