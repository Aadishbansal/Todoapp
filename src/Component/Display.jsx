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
    <>
      <div className="container d-flex flex-wrap justify-content-evenly w-50 ">
        {props.todoList.length > 0
          ? props.todoList.map((item, index) => {
              return (
                <div
                  className="card mt-2 mx-1 "
                  style={{ width: "18rem" }}
                  key={item.id}
                >
                  <div className="card-body">
                    <p
                      className={`card-text ${
                        item.check ? "text-decoration-line-through" : ""
                      }`}
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
                        onClick={() => removeItem(index)}
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
                          onChange={() => onCheck(index)}
                          checked={item.check}
                        />
                        {item.check ? <TbCheckbox /> : <ImCheckboxUnchecked />}
                      </label>

                      <button
                        type="button"
                        disabled={item.check}
                        className="btn btn-success"
                        onClick={() => editItem(index)}
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
      {/* <Display/> */}
    </>
  );
}
export { Display };
