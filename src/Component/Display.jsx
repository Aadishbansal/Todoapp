import React from "react";
function Display(props) {
  const removeItem = (e) => {
    props.handleTaskRemove(e);
  };
  const onCheck = (e) => {
    console.log(e);
    props.handleCheck(e);
  };
  const editItem = (e) => {
    props.handleEdit(e);
  };
  return (
    <div className="container d-flex  flex-wrap">
      {props.todoList.length > 0
        ? props.todoList.map((item, index) => {
            return (
              <div
                className="card mt-3 mx-1"
                style={{ width: "18rem" }}
                key={index}
              >
                <div className="card-body">
                  <p className={`card-text ${item.textDecoration}`}>
                    {item.data}
                  </p>
                  {/* <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => removeItem(index)}
                    >
                      Delete
                    </button>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="btncheck2"
                      // value={"Complete"}
                      onChange={() => console.log(index)}
                      checked={item.check}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btncheck2"
                    >
                      Completed
                    </label>

                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => editItem(index)}
                    >
                      {item.editAble ? "Submit" : "Edit"}
                    </button>
                  </div> */}
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-danger me-1"
                      onClick={() => removeItem(index)}
                    >
                      Delete
                    </button>
                    <input
                      className="form-check-input mx-0"
                      type="checkbox"
                      checked={item.check}
                      onChange={() => onCheck(index)}
                    />
                    <label className="form-check-label me-2">
                      {item.check ? "Completed" : "Complete"}
                    </label>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => editItem(index)}
                    >
                      {item.editAble ? "Submit" : "Edit"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}
export { Display };
