import If from "./If"

const IconButton = props =>(
    <If test={!props.hide}>
        <button className={props.style}
        onClick={props.onClick}>
            <i className={`fa fa-${props.icon} align-baseline font-light`}></i>
        </button>
    </If>
)
    

export default IconButton