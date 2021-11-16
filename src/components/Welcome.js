import React, {Component} from 'react'
import './Welcome.css'

let dt=new Date();
let sh = dt.toLocaleString('en-CN', { timeZone: 'Asia/Shanghai' });
let kt = dt.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
let la = dt.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
let tk = dt.toLocaleString('en-JP', { timeZone: 'Asia/Tokyo' });
let br = dt.toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' })
class Welcome extends Component{
render(){
    // eslint-disable-next-line
   // let m='India:'+kt+'\n'+'America:'+la+'\n'+'Australia:'+br+'\n'+'China:'+sh+'\n'+'Japan:'+tk;
    return(
        <div className="Welcome" align="center">
            <table>
                <tr><td>Country</td><td>Date and Time</td></tr>
                <tr><td>India</td>
    <td>{kt}</td></tr>
    <tr><td>America</td>
    <td>{la}</td></tr>
    <tr><td>Austrialia</td>
    <td>{br}</td></tr>
    <tr><td>China</td>
    <td>{sh}</td></tr>
    <tr><td>Japan</td>
    <td>{tk}</td></tr>
            </table>
	</div>
    );
}
}
export default Welcome
