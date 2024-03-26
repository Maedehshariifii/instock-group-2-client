import "./_TableRow.scss";
import EditIcon from "../../assets/icons/edit-24px.svg";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import TableDataField from "../TableDataField/TableDataField";

const TableRow = ({ field1Heading, field1Content, field2Heading, field2Content, field3Heading, field3Content, field4Heading, field4Content, field5Heading, field5Content, statusProp, isInvList }) => {
    let stockStatus;
    if (statusProp) {
        stockStatus = statusProp === "In Stock" ? 'in-stock' : 'out-of-stock';
    }
    console.log(`field4: ${field4Content} ${field4Heading}`)
    return (
        <>
            <hr className="table-row-divider"></hr>

            <div className="table-row">
                <div className="table-row-text-ctn">

                    <TableDataField txtContent={field1Content} heading={field1Heading} isChevronRequired={false} />

                    <TableDataField txtContent={field2Content} heading={field2Heading} />
                    <TableDataField txtContent={field3Content} heading={field3Heading} stockStatus={stockStatus} />

                    {/* empty div for content organizing purpose */}
                    <TableDataField txtContent={field4Content.toString()} heading={field4Heading} />
                    <div className="data-field empty"></div>
                    <TableDataField txtContent={field5Content} heading={field5Heading} display={!isInvList} />
                </div>
                <div className="table-row-icon-ctn">
                    <img src={DeleteIcon} alt="Detail" className="table-row-icon-ctn__icon" />
                    <img src={EditIcon} alt="Detail" className="table-row-icon-ctn__icon" />
                </div>
            </div>
        </>
    );
};

export default TableRow;
