
import service from '@/services'
import {json2UrlPath , json2QueryString} from './functions/string'

export interface params{
    pathParams?:any,
    queryParams?:any,
    payloadBody?:any
}

export interface respose {
    success:boolean,
    data:any,
    error:any,
    message:string
}

async function apiRequest(methode:'POST'|'GET'|'DELETE'|'PUT'|'PATCH',path:string="",params:params={}){

    let apiEndPoint = path

    if(params.pathParams){
        apiEndPoint = await json2UrlPath(apiEndPoint,params.pathParams)
    }

    if(params.queryParams){
        apiEndPoint = apiEndPoint + '?'+ await json2QueryString(params.queryParams)
    }
        

    switch(methode){
        
        case 'GET':
            try{

                let response =  await service.get(apiEndPoint);
                return response?.data

            }catch(error:any){

                console.log(error)
                return error?.response?.data
            }

        case 'POST':
            try{

                let response =  await service.post(apiEndPoint,params?.payloadBody||{});
                return response?.data

             }catch(error:any){

                console.log(error)
                return error?.response?.data
             }

        case 'PUT':
            try{

                let response =  await service.put(apiEndPoint,params?.payloadBody||{});
                return response?.data

             }catch(error:any){
                console.log(error)
                return error?.response?.data
             }
        
        case 'PATCH':
            try{

                let response =  await service.patch(apiEndPoint,params.payloadBody||{});
                return response?.data

             }catch(error:any){
                console.log(error)
                return error?.response?.data
             }

        case 'DELETE':
            try{

                let response =  await service.delete(apiEndPoint);
                return response?.data

             }catch(error:any){
                console.log(error)
                return error?.response?.data
             }
        
        default:

            try{

                let response =  await service.get(apiEndPoint);
                return response?.data

            }catch(error:any){

                console.log(error)
                return error?.response?.data
            }
    }

}

export default apiRequest
