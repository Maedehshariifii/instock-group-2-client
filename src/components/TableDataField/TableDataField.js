import "./_TableDataField.scss";
import RightChevron from "../../assets/icons/chevron_right-24px.svg";

// render one field (heading where applicable, and content)
// to be used inside TableRow component
// number of field to be used depends on type of table
export default function TableDataField({ txtContent, heading, stockStatus, isChevronRequired }) {
    if (!heading || !txtContent) {
        return
    }

    // add stock status if field being rendered is item's status  
    const statusProp = stockStatus ? `--${stockStatus}` : '';

    return (
        <div className="data-field">
            <h4 className='data-field__heading'>{heading.toUpperCase()}</h4>
            <p className={`data-field__content${statusProp}`}>
                {txtContent}

                {/* render the chevron only for first field of each table row */}
                <img
                    hidden={!isChevronRequired}
                    src={RightChevron}
                    alt="Right Chevron"
                    className="table-row-text__chevron"
                /></p>
        </div>
    )
}