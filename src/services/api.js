import axios from "axios";
import {useState} from 'react'
import config from '../config/api';

const API_BASE_URL = 'https://fa.bdtechnologies.ch/api/v1'

export const RemoveFavorite = async (id) => {
    try{
        const response = await axios.delete(`${API_BASE_URL}/favorites`, {
            data: {
                profileId: id
            }
        });

        if(response.status === 200){
           console.log('successful')
        }
    }catch (e) {
        console.log('error', e);
    }
}

export const AddFavorite = async (id) => {
    try{
        const response = axios.post(`${API_BASE_URL}/favorites`, {profileId: id});

        if(response.status === 200){
            console.log('successful')
        }
    }catch (e) {
        console.log('error', e);
    }
}

export const GetFavorite = async () =>{
    const user = config.loggedInUser;
    try{
        const response = await axios.get(`${API_BASE_URL}/favorites`)
        if(response.status === 200){

            const {favorites} = await response.data
            console.log('successfully ', favorites[user])
            return favorites[user];
        }
    }catch (e) {

    }
}