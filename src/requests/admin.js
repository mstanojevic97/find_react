export async function getData(){
    return fetch("home/admin").then((res) =>res.json());
}

export async function getCompany(){
    return fetch("/admin/freights").then((res) =>res.json());
}

export async function getCompanyData(){
    return fetch("/home/producer").then((res) =>res.json());
}



