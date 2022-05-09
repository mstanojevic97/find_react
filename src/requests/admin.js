import {requestWithAuthHeder} from './index'

export async function getData(){
    return fetch("home/admin").then((res) =>res.json());
}

export async function getCompany(){
    return fetch("/admin/freights").then((res) =>res.json());
}

export async function getCompanyData(){
    return requestWithAuthHeder("/home/producer", "get");
}

export async function getSupplierData(){
    return requestWithAuthHeder("/home/supplier","get");
}

