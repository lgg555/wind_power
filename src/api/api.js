import request from "./request"

// 这里是本项目要用到的所有接口

// 注册
//params中的内容 username password confirmPwd确认密码 nickname名字 number手机号
export function postRegisterData(params) {
    return request({
        url: '/pvs/user/register',
        method: 'post',
        data: params

    })
};
// 登录
// username password
// 成功后返回data对象token:'...'
export function postLoginData(params) {
    return request({
        url: '/pvs/user/login',
        method: 'post',
        data: params

    })
};
//////////////////////////////////////////////////////////////////
// 以下接口请求头中必须带token
// 获取用户信息 
// 得到的数据data有number role name nickname
export function getUserData(params) {
    return request({
        url: '/pvs/user/info',
        method: 'get',
        data: params

    })
};
// 用户注销 params中带的就是token
export function postUserLogOut(params) {
    return request({
        url: '/pvs/user/logout',
        method: 'post',
        data: params

    })
}
// 获取首页告警趋势分析的数据
//以当天为基准10天内的告警条数
export function getAlarmlistData(params) {
    return request({
        url: '/pvs/home/screen',
        method: 'get',
        data: params

    })
}
// 光伏阵列区概览 请求参数为pvname
export function getPvareaData(params) {
    return request({
        url: `/pvs/pvarea/info?pvname=${params}`,
        method: 'get',


    })
}
// 箱变监测
//请求参数为bname和bstate，查询用，bname可缺省，bstate不能缺省。
export function getBoxData(params) {
    return request({
        url: `pvs/box/monitor?bstate=${params}`,
        method: 'get',


    })
}
// 汇流箱监测
//请求参数为cname和cstate，
export function getCombinerData(params) {
    return request({
        url: '/pvs/combiner/monitor',
        method: 'get',
        data: params

    })
}
// 逆变器监测
//请求参数为iname和istate 注意返回数据仍有total
export function getInverterData(params) {
    return request({
        url: '/pvs/inverter/monitor',
        method: 'get',
        data: params

    })
}
//光伏组串监测
//请求参数为sname和sstate
export function getSeriesData(params) {
    return request({
        url: '/pvs/series/monitor',
        method: 'get',
        data: params

    })
}
// 实时告警
//请求参数为aloc（告警位置）、aloctype（位置类型）、alevel（告警等级）、atype（告警类型）、awstate（工单状态）。都可缺省，做查询用
export function getAlarmData(params) {
    return request({
        url: '/pvs/alarm/actual',
        method: 'get',
        data: params

    })
}
// 历史告警
// 请求参数和实时告警相比，少个awstate，也都可缺省
export function getHistoryAlarmData(params) {
    return request({
        url: '/pvs/alarm/history',
        method: 'get',
        data: params

    })
}
// 下发工单
//请求参数为：people选择当前数据库中存的用户名字
export function postWorkorderAlarmData(params) {
    return request({
        url: '/pvs/workorder/add',
        method: 'post',
        data: params

    })
}
// 我的工单
// 请求参数为wloc、wtype、wlevel、wstate，都可缺省，作查询用
export function getWorkorderAlarmData(params) {
    return request({
        url: '/pvs/workorder/mywork',
        method: 'get',
        data: params

    })
}
// 工单处理
// 请求参数为wnum。
export function getWorkorderSolveData(params) {
    return request({
        url: '/pvs/workorder/solve',
        method: 'get',
        data: params

    })
}