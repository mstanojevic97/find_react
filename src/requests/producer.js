import {requestWithAuthHeder} from './index'

export async function addFreight(data){
    return requestWithAuthHeder("/home/producer/add", "post", data);
}