import React, { useState } from "react";

export default function DemoHookUseEffect() {
  let [state, setState] = useState(0);
  const handleIncreate = () => {
    setState((state += 1));
  };
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg"
          className="card-img-top"
          alt="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg "
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p style={{ color: "red" }}> tim</p>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleIncreate()}>
        +
      </button>
    </div>
  );
}
