import general from '../config/general';
import axios from 'axios';
import api from './api';

function saveImage(id, file, token)
{
    let formData = new FormData();
    formData.append('arquivo', file);
    const headers = {
        headers: {
            'Content-Type': 'multipart/form-data; boundary=',
            'appid': general.appId,
            'Authorization': 'bearer '+ token
        },
        };
    return api.post('Faleconosco/UploadFoto/'+id,formData,headers);
}

function saveFaleconosco(dados, token)
{
    const headers = {
        headers: {
            'appid': general.appId,
            'Authorization': 'bearer '+ token
        },
        };
    return api.post('Faleconosco',dados,headers);
}
function saveImageInteracao(id, file, token)
{
    let formData = new FormData();
    formData.append('arquivo', file);
    const headers = {
        headers: {
            'Content-Type': 'multipart/form-data; boundary=',
            'appid': general.appId,
            'Authorization': 'bearer '+ token
        },
    };
    return api.post('Faleconosco/Interacao/UploadFoto/'+id,formData,headers);
}

function saveInteracao(dados, token)
{
    const headers = {
        headers: {
            'appid': general.appId,
            'Authorization': 'bearer '+ token
        },
    };
    return api.post('Faleconosco/Interacao',dados,headers);
}
function saveInteracaoLido(id, token)
{
    const headers = {
        headers: {
            'appid': general.appId,
            'Authorization': 'bearer '+ token
        },
    };
    return api.post('Faleconosco/Interacao/Lido/'+id,{},headers);
}

export default {
    saveImage: saveImage,
    saveFaleconosco: saveFaleconosco,
    saveInteracao: saveInteracao,
    saveImageInteracao: saveImageInteracao,
    saveInteracaoLido: saveInteracaoLido,
};