import {requestWithAuthHeder} from './index'

export async function getData(){
    return requestWithAuthHeder("home/admin", "get");
}

export async function updateAdmin(data){
    return requestWithAuthHeder("/home/admin/update", "post", data);
}

export async function getCompany(){
    return fetch("/admin/freights").then((res) =>res.json());
}
export async function deleteCompany(data){
    return requestWithAuthHeder("/home/admin/deleteCompany", "post", data);
}
export async function getCompanyData(){
    return requestWithAuthHeder("/home/producer", "get");
}

export async function getSupplierData(){
    return requestWithAuthHeder("/home/supplier","get");
}