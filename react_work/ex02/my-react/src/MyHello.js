import PropTypes from "prop-types"


function MyHello(props){
    return(
        <div>
            안녕하세요, {props.myName}님!
        </div>
    )
}

MyHello.prototype = {
    myName: PropTypes.string.isRequired
}

export default MyHello;