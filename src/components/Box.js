import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Popup from 'reactjs-popup';

const Box = ({
  title,
  heading,
  deleteAll,
  search,
  setSearch,
  items,
  handleCheck,
  handleDelete,
  newItem,
  setNewItem,
  handleSubmit,
}) => {
  return (
    <div className="container"
    >
      <h2 className="Boxheading">Things to get</h2>

      <h2>{heading}</h2>
      <div className="line"></div>
      <div className="assets">
        <table>
          <tr>
            <td className="bin">
              <img src={"./images/gridicons-trash.svg"} alt="bin"></img>
            </td>
            <td>
              <span className="searchbar">
                <form className="search" onSubmit={(e) => e.preventDefault()}>
                  <input
                    id="search"
                    type="text"
                    placeholder="Search Item"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                    <i className="fa fa-search" aria-hidden="true"></i>
                  
                </form>
              </span>
            </td>
            <td className="addButton">
            <Popup trigger = 
              {<img
                src={"./images/add-button.svg"}
                alt="addButton"
                onSubmit={(e) => e.preventDefault()}
              ></img> }
              position="right">
              <div
               className="addFormBox">
              <form className="addForm" onSubmit={handleSubmit}>
                <input
                  id="addForm"
                  type="text"
                  required
                  placeholder="Add new Item to List"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                />
                <button className="addItemBtn"
                type="submit">Done</button>

                
              </form>
              

             
            </div>
          </Popup>
            </td>
          </tr>
        </table>
        <div className="line"></div>
        <div className="listItems">
          <ul>
            {items
              ? items.map((item) => (
                  <li className="itemlist" key={item.id}>
                    <input
                      type="checkbox"
                      onChange={() => handleCheck(item.id)}
                      checked={item.checked}
                    />
                    <label
                      style={
                        item.checked ? { textDecoration: "line-through" } : null
                      }
                      onDoubleClick={() => handleCheck(item.id)}
                    >
                      {item.item}
                    </label>
                    <div className="trashcans">
                    <FaTrashAlt
                      className="trash"
                      onClick={() => handleDelete(item.id)}
                      role="button"
                      tabIndex={0}
                    />
                    </div>
                   

                  </li>
                  
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Box;
