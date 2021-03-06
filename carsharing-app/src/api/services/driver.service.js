/**
 * Created by lmz on 2017/7/24.
 *司机数据服务
 */
import Vue from 'vue'
import '../http/host.interceptor'
import { HttpResHelper } from '../'
import {
    regToDriverUrl,
    inviteToRouteUrl,
    updateDriverInfoUrl,
    getDriverByNoUrl
} from '@/api/http/host.config'
export default {
    regToDriver: (driver, success, err) => {
        Vue.http.post(regToDriverUrl,
            {
                region: driver.region, // 车辆属地
                carLicense: driver.carLicense, // 行驶证号
                userLicense: driver.userLicense, // 驾驶证号
                licenseDate: driver.licenseDate, // 驾驶证领取期
                validDate: driver.validDate, // 驾驶证有效期
                carNo: driver.carNo, // 车牌号
                color: driver.color, // 颜色
                brand: driver.brand, // 品牌
                model: driver.model // 型号
            })
            .then(
            (response) => {
                HttpResHelper.resHandle(response, success, err);
            }, (response) => {
                // 响应错误回调
                HttpResHelper.resHandle(response, success, err);
            })
    },
    updateDriverInfo: (driver,success, err) => {
        Vue.http.post(updateDriverInfoUrl,
            {
                region: driver.region, // 车辆属地
                carLicense: driver.carLicense, // 行驶证号
                userLicense: driver.userLicense, // 驾驶证号
                licenseDate: driver.licenseDate, // 驾驶证领取期
                validDate: driver.validDate, // 驾驶证有效期
                carNo: driver.carNo, // 车牌号
                color: driver.color, // 颜色
                brand: driver.brand, // 品牌
                model: driver.model // 型号
            })
            .then(
            (response) => {
                HttpResHelper.resHandle(response, success, err);
            }, (response) => {
                // 响应错误回调
                HttpResHelper.resHandle(response, success, err);
            })
    },
    getDriverByNo:(user,success, err)=>{
        Vue.http.get(getDriverByNoUrl,{
            userNo:user.userNo
        })
            .then(
            (response) => {
                HttpResHelper.resHandle(response, success, err);
            }, (response) => {
                // 响应错误回调
                HttpResHelper.resHandle(response, success, err);
            })
    }
}