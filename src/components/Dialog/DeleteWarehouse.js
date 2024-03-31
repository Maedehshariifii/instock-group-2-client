import "../Dialog/DeleteWarehouse.scss";
import closeBtn from "../../assets/icons/close-24px.svg";

const DeleteWarehouse = ({ onDialog, item }) => {
  const handleClose = () => {
    onDialog(false);
  };

  return (
    <>
      <div className="del-box ">
        <div className="del-box__elem">
          <div className="del-box__elem--1">
            <button onClick={handleClose}>
              <img
                className="close-btn__icon"
                src={closeBtn}
                alt="close button"
              ></img>
            </button>
          </div>
          <section className="del-box__elem--2">
            <h1 className="del-box__elem--2__header">
              Delete {item.warehouse_name} warehouse?
            </h1>
            <p className="del-box__elem--2__par">
              Please confirm that you'd like to delete the {item.warehouse_name}{" "}
              from the list of warehouses. You won't be able to undo this
              action.
            </p>

            <div className="del-box__elem--2__btns">
              <button
                className="del-box__elem--2__btns__cancel "
                onClick={() => onDialog(false)}
              >
                Cancel
              </button>
              <button
                className="del-box__elem--2__btns__del"
                onClick={() => onDialog(true)}
              >
                Delete
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default DeleteWarehouse;
