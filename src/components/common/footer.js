import React from "react";
import { Link } from "react-router-dom";
require("./css/footer.less");

class Footer extends React.Component{
    render() {
        return (
            <div className="footerBg">
                <div className="footer clearfix">
                    <div className="left">
                        <img src="http://www.315free.com/static/img/foot_logo.png" alt=""/>
                    </div>
                    <div className="center clearfix">
                        <div className="center_left">
                            <Link to="/about">关于我们</Link>
                            <Link to="/team">核心团队</Link>
                            <Link to="/freeman_hot">智库热点</Link>
                        </div>
                        <div className="center_left center_right">
                            <Link to="/development">发展历程</Link>
                            <a target="_blank" href="http://help.315free.com/" rel="noopener noreferrer">帮助中心</a>
                            <Link to="/recruitment">招贤纳士</Link>
                        </div>
                    </div>
                    <div className="right clear">
                        <div className="right_item">
                            <img src="http://www.315free.com/static/img/wx.png" alt="官方微信号"/>
                            <p>官方微信号</p>
                        </div>
                        <div className="right_item">
                            <img src="http://www.315free.com/static/img/xcxcode.jpg" alt="三点一刻小程序"/>
                            <p>三点一刻小程序</p>
                        </div>
                        <div className="right_item">
                            <img src="http://www.315free.com/static/img/appDownload.png" alt="APP下载"/>
                            <p>APP下载</p>
                        </div>
                    </div>
                    <p className="clear textAlign">2015-2018 北京三点一刻科技有限公司 版权所有 京ICP备：15064808号-1</p>
                </div>
            </div>
        );
    }
};
export default Footer;