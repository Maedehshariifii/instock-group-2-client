import "./_TableDataField.scss";
import RightChevron from "../../assets/icons/chevron_right-24px.svg";

export default function TableDataField({ txtContent, heading, stockStatus, isChevronRequired }) {
    if (!heading || !txtContent) {
        return
    }

    let statusProp;
    if (stockStatus) {
        statusProp = stockStatus ? `--${stockStatus}` : '';
    }
    return (
        <div className="data-field">
            <h4 className='data-field__heading'>{heading.toUpperCase()}</h4>
            <p className={`data-field__content${statusProp}`}>
                {txtContent}
                <img
                    hidden={!isChevronRequired}
                    src={RightChevron}
                    alt="Right Chevron"
                    className="table-row-text__chevron"
                /></p>
        </div>
    )
}