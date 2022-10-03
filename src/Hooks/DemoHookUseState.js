import React, { useState } from "react";

export default function DemoHookUseState(props) {
  //(1) this.state={like:0}
  //(2) this.setState(newState)
  let [state, setState] = useState({ like: 0 });
  const handleLike = () => {
    setState({ like: state.like + 1 });
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
          <p style={{ color: "red" }}>{state.like} tim</p>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleLike}>
        Like
      </button>
    </div>
  );
}
