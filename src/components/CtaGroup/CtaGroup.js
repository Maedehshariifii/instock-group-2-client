import './_CtaGroup.scss'
import { useNavigate } from "react-router-dom";

export default function CtaGroup({ isModal, actionName, handleFormSubmit, onClose, navigateTo }) {
    const navigate = useNavigate();
    const handleGoBack = () => {
        if (isModal) {
            onClose()
        }
        navigate(navigateTo)
    }

    const modalClassAddOn = isModal ? '-modal' : ''

    return (
        <div className={`cta-group-container${modalClassAddOn}`}>
            <button className="cta-group-container__cancel" onClick={handleGoBack}>
                Cancel
            </button>
            <button className={`cta-group-container__${actionName}`} onClick={handleFormSubmit}>
                {actionName} Item
            </button>
        </div>
    )
}