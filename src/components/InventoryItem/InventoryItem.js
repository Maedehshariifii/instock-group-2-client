import "./_InventoryItem.scss";

export default function InventoryItem({ txtContent, heading, stockStatus }) {
    const statusProp = stockStatus ? `--${stockStatus}` : '';
    return (
        <div className="inv-card-txt-item">
            <h4 className='inv-card-txt-item__heading'>{heading.toUpperCase()}</h4>
            <p className={`inv-card-txt-item__content${statusProp}`}>{txtContent}</p>
        </div>
    )
}