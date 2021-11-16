import React, {Component} from 'react'
import './Welcome.css'
const bodyBg=document.querySelector('body');
const colors = ["url('https://cutewallpaper.org/21/chill-desktop-wallpaper/chill-sunrise-graphic-design-in-2019-Minimalist-desktop-.jpg')",
	"url('https://wallpaperaccess.com/full/327148.jpg')",
	"url('https://plainbackground.com/plain1024/ce2029.png')",
	"url('https://i.pinimg.com/originals/85/a7/93/85a7935162ff77b2e6bd4a4d96d367b9.jpg')",
	"url('https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-02.jpg')"];
class Color extends Component{
		colorChangeHandler = () => {
			let random=Math.floor(Math.random()*colors.length);
	bodyBg.style.backgroundImage=colors[random];
	
		}
render(){
return (
	<div className="Color">
		<button onClick={this.colorChangeHandler}>SwitchBG</button>
	</div>
);
}
}
export default Color
