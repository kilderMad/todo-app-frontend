import If from "./If"

const IconButton = props =>(
    <If test={!props.hide}>
        <button className={`${ props.style} flex justify-center items-center`}
        onClick={props.onClick}>
            <i className={`fa fa-${props.icon} text-center font-light`}></i>
        </button>
    </If>
)
    

export default IconButton