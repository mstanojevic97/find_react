import {requestWithAuthHeder} from './index'

export async function completeFreight(data){
    return requestWithAuthHeder("/home/supplier/finish", "post", data);
}
export async function cancelFreight(data){
    return requestWithAuthHeder("/home/supplier/cancel","post", data);
}
export async function confirmFraight(data){
    debugger
    return requestWithAuthHeder("/home/supplier/confirm", "post", data)
}