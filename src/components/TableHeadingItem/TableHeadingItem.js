import SortIcon from "../../assets/icons/sort-24px.svg";
import "./_TableHeadingItem.scss";

export default function TableHeadingItem({ headingTxt }) {
    return (
        <div className="heading-item">
            <h4>{headingTxt.toUpperCase()}</h4>
            <img src={SortIcon} alt="Sort Icon" />
        </div>
    )
}