import "./_TableRow.scss";
import EditIcon from "../../assets/icons/edit-24px.svg";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import TableDataField from "../TableDataField/TableDataField";

// reusable component that render a row of a table
// receive up to 5 pairs of field's heading and content
const TableRow = ({ field1Heading, field1Content, field2Heading, field2Content, field3Heading, field3Content, field4Heading, field4Content, field5Heading, field5Content, statusProp, isInvList }) => {
    // stockStatus only kick in when this component receives status pro from its parent (Inventory Container)
    let stockStatus;
    if (statusProp) {
        stockStatus = statusProp === "In Stock" ? 'in-stock' : 'out-of-stock';
    }
    return (
        <>
            <hr className="table-row-divider"></hr>

            <div className="table-row">
                <div className="table-row-text-ctn">

                    <TableDataField txtContent={field1Content} heading={field1Heading} isChevronRequired={true} />

                    <TableDataField txtContent={field2Content} heading={field2Heading} />
                    <TableDataField txtContent={field3Content} heading={field3Heading} stockStatus={stockStatus} />

                    {/* empty div for content display purpose in mobile view for Inventories Table */}
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
