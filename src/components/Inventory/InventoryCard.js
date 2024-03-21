const InventoryCard = ({ item, warehouseName }) => {
  return (
    <>
      <section>
        <h4>INVENTORY ITEM</h4>
        <p>{item.item_name}</p>
        <h4>STATUS</h4>
        <p>{item.status}</p>
        <h4>CATEGORY</h4>
        <p>{item.category}</p>
        <h4>QTY</h4>
        <p>{item.quantity}</p>
        <h4>WAREHOUSE</h4>
        <p>{warehouseName}</p>
        <hr></hr>
      </section>
    </>
  );
};

export default InventoryCard;
