import {requestWithAuthHeder} from './index'

export async function getLoads(){
    return requestWithAuthHeder("/common/loads", "get");
}