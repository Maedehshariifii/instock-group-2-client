import './_CtaGroup.scss'

export default function CtaGroup({ actionName, handleFormSubmit }) {

    const handleGoBack = () => {
        window.history.back();
    }

    return (
        <div className="cta-group-container">
            <button className="cta-group-container__cancel" onClick={handleGoBack}>
                Cancel
            </button>
            <button className={`cta-group-container__${actionName}`} onClick={handleFormSubmit}>
                {actionName} Item
            </button>
        </div>
    )
}