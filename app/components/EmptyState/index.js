import React,{Component} from "react"
import "./style.less"
import GJJEMPTY from "./images/gjj-empty.png"
import SBEMPTY from "./images/sb-empty.png"

/**
 * 空态页
 */
class EmptyState extends Component{
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		const props = this.props;
		let pT = props.paddingTop || "30%";
		return(
			<div className = "flex-column" style={{paddingTop:pT}}>
				<div className = "flex-center">
					<img src = {props.imgSrc} />
				</div>
				<div className = "empty-state-msg">
					<div>{props.des}</div>
				</div>
			</div>
		)
	}
}

EmptyState.defaultProps = {
	imgSrc:GJJEMPTY,
	des:"该功能尚未开通，敬请期待..."
}

export default EmptyState