import {requestWithAuthHeder} from './index'

export async function getLoads(){
    return requestWithAuthHeder("/common/loads", "get");
}
export async function updateCompany(data){
    return requestWithAuthHeder("/home/company/update", "post", data);
}