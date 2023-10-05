import React from "react";

import Box from "./Box";


const Content = ({
  items,
  newItem,
  setNewItem,
  handleSubmit,

})=> {

  return (
    <div>
 
    
      <div className="content">
        <div className="wrapper">
          <table>
            <tr>
            <td><Box heading ='box to get'/></td>
              <td><Box heading = 'box to Do'/></td>
            </tr>
          </table>
        </div>

        <div className="itemdiv">
          {items.length ? (
            <div>
              {/*<p className="info">Total Items : {items.length}</p>*/}
              <form className="addForm" onSubmit={handleSubmit}>
                <input
                  id="addForm"
                  type="text"
                  required
                  placeholder="Add new Item to List"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                />

                
              </form>

             
            </div>
          ) : (
            <p style={{ marginTop: "2rem" }}>Your list is empty</p>
          )}
        </div>
          </div> 
    </div>
  );
};

export default Content
