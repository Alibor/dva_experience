// ant-design配合dva常用插件

// 模块导出时采用：
// export default module;  引入是不需要{}
// export module;  引入是需要{}

import { routerRedux } from 'dva/router'   //路由监控模块
//用于项目内页面跳转，查看详情页等操作
dispatch(routerRedux.push({
        pathname: '/home',  //跳转地址
        query: {}           //跳转传递参数
}))

import Cookie from 'js-cookie'   //获取设置cookie的方法
//用于对cookie的操作，存储用户信息等
Cookie.set("userId",data.result.userId); //设置用户Id
const id = Cookie.get("userId")   //读取用户Id  

import { parse } from 'qs'   //json格式转换方法
//发送请求是数据格式化
const data = yield call(query,parse(payload))

import React, { PropTypes } from 'react' //引入react和规定类型模块
//引入React
class Index extends React.Component{
	  render(){
	  	 return (
	  	 )
	  }
}
//限制组件传递值时候的类型
Index.propTypes = {
	loading : PropTypes.any,
	dataSource : PropTypes.array,
	onDelete : PropTypes.func,
}
//共有六种限制
PropTypes.array
PropTypes.bool
PropTypes.func
PropTypes.number
PropTypes.object
PropTypes.string


import { connect } from 'dva'  //用于route和model的连接
//用于连接
function mapStateToProps({ model的namespace }) {  //mapStateToProps用于监测state的变化,对应的compontent重新渲染
  return { model的namespace }
}
export default connect(mapStateToProps)(组件名称)

import debounce from 'lodash.debounce';  //用于控制input输入框延时请求
function getCity(value){
    getCityList(value)
}
getCity = debounce(getCity,500)  //输入框变化并且0.5秒内没有输入才发送请求

import moment from 'moment';  //用于控制时间格式
const dateFormat = 'YYYY-MM-DD ';
<RangePicker format={dateFormat} onChange={OK} ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}/>  //ant-design时间选择器格式