import "./InventoryContainer.scss";
const InventoryContainer = () => {
  return (
    <>
      <section className="card-container">
        <h1 className="page-heading">Inventory</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            className="search__input"
          />
          <button className="search__button"></button>
        </div>
        <button className="form-cta">+ Add New Warehouse</button>
        <hr></hr>
      </section>
    </>
  );
};

export default InventoryContainer;
