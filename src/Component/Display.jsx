import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbCheckbox } from "react-icons/tb";
import { ImCheckboxUnchecked } from "react-icons/im";
import { MdModeEdit, MdEditOff } from "react-icons/md";

function Display(props) {
  const removeItem = (e) => {
    props.handleTaskRemove(e);
  };
  const onCheck = (e) => {
    props.handleCheck(e);
  };
  const editItem = (e) => {
    props.handleEdit(e);
  };
  return (
    <div
      className="container overflow-auto "
      style={{ maxHeight: "541px", width: "25em" }}
    >
      {props.todoList.length > 0
        ? props.todoList.map((item) => {
            return (
              <div
                className="card mt-2 mx-auto"
                style={{ width: "18rem" }}
                key={item.id}
              >
                <div className="card-body">
                  <p
                    className={`card-text overflow-auto ${
                      item.check ? "text-decoration-line-through" : ""
                    }`}
                    style={{ maxHeight: "54px" }}
                    onClick={() => onCheck(item.id)}
                  >
                    {item.data}
                  </p>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => removeItem(item.id)}
                    >
                      <RiDeleteBin5Line />
                    </button>
                    <label
                      className={`btn ${
                        item.check ? "btn-primary" : "btn-outline-primary"
                      }`}
                    >
                      <input
                        type="checkbox"
                        style={{ color: "black" }}
                        className="btn-check"
                        checked={item.check}
                        onChange={() => onCheck(item.id)}
                      />
                      {item.check ? <TbCheckbox /> : <ImCheckboxUnchecked />}
                    </label>

                    <button
                      type="button"
                      disabled={item.check}
                      className="btn btn-success"
                      onClick={() => editItem(item.id)}
                    >
                      {item.check ? <MdEditOff /> : <MdModeEdit />}
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
