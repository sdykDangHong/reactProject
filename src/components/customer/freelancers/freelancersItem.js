import React , { Component } from "react";
import { Progress } from "antd";
class  FreelancersItem extends Component{
    // 去重返回智库一级技能标签
    filterSkill(skill) {
        var oldarr;
        var arr = [];
        var arr1 = [];
        if (skill) {
            if (skill.indexOf(',') > -1) {
                oldarr = skill.split(',');
            } else {
                oldarr =[skill];
            }
        } else {
            oldarr = [];
            return ['暂无']
        }
        for (var i = 0; i < oldarr.length; i++) {
            arr.push(oldarr[i].split('-')[0]);
        }
        for (var k = 0; k < arr.length; k++) {
            if (arr1.join(',').indexOf(arr[k]) <= -1) {
                arr1.push(arr[k]);
            }
            if (k === arr.length - 1) {
                return arr1;
            }
        }
    }
    returnSrc(headerpic){
        let fileUrl="http://file.315pr.com"
        return headerpic?(headerpic.indexOf(fileUrl)===-1?fileUrl+headerpic:headerpic):fileUrl+'/upload/defaultHeader.png'
    }
    render(){
        return (
            <div className="freelancerItem clear">
                <div className="headerPic">
                    <div className="img">
                        <img src={this.returnSrc(this.props.headerpic)} alt={this.props.nick}/>
                    </div>
                    <div className="nick">{this.props.nick}</div>
                </div>
                <div className="userInfo">
                    <div className="top clear">
                        {this.filterSkill(this.props.skills.join(',')).slice(0,3).map((item)=><i key={item}>{item}</i>)}

                    </div>
                    <div className="center clear">
                        <div className="tit">信息完整度：</div>
                        <Progress style={{"float":"left","width":"100px"}} percent={this.props.info_score} strokeColor="#ff5455" size="small" status="active"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default FreelancersItem;