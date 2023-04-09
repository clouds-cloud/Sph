//对所有API进行统一管理
import requests from './request';
import mockRequests from './mockAjax';
//三级联动接口
// /api/product/getBaseCategoryList get 无参数

export const reqCategoryList = () => requests({ url: '/api/product/getBaseCategoryList', method: 'get' })
export const reqGetBannerList = () => mockRequests({ url: '/banner', method: 'get' })
export const reqGetFloorList = () => mockRequests({ url: '/floor', method: 'get' })
    //获取搜索模块数据
export const reqSearchList = (params) => requests({ url: '/api/list', method: 'post', data: params })