import {requestWithAuthHeder} from './index'

export async function addFreight(data){
    return requestWithAuthHeder("/home/producer/add", "post", data);
}
export async function editFreight(data){
    return requestWithAuthHeder("/home/producer/edit", "post", data);
}
export async function deleteFreight(data){
    return requestWithAuthHeder("/home/producer/delete", "post", data);
}