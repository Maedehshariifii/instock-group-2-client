import "./_SearchAdd.scss";
import searchIcon from '../../assets/icons/search-24px.svg'

export default function SearchAdd({ addButtonContent }) {
    return (
        <div className="search-add">
            <div className="search-container">
                <input type="text" className="search-container__input" placeholder="Search..." />
                <img src={searchIcon} alt='search icon' className="search-container__icon"></img>
            </div>

            <button className="search-add__add-button">{addButtonContent}</button>
        </div>

    )
}