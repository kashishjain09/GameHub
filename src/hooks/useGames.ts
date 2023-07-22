// import React from 'react'
import { CanceledError } from "axios";
import { useState,useEffect } from "react";
import apiClient from '../services/api-client'; 


export interface Platform{
    id:number;
    name:string;
    slug:string;
}
export interface Game{
    id:number;
    name:string;
    background_image:string;
    parent_platforms: {platform:Platform}[];
    metacritic:number;
}


interface FetchGamesResponse{
    count:number;
    results:  Game[]
}
const useGames = () => {
    const [games,setGames]=useState<Game[]>([]);
    const [error,setError]=useState('');
    const [isLoading,setLoding]=useState(false);

    useEffect(()=>{
        const controller=new AbortController();
        setLoding(true);

        apiClient.get<FetchGamesResponse>('/games',{signal:controller.signal})
        .then(res=> {
            setGames(res.data.results);
            setLoding(false);
        })

        .catch((err)=>{
            if(err instanceof CanceledError) return;
            setError(err.message) 
            setLoding(false);
        });

        return()=> controller.abort();
    },[]);

    return{games,error,isLoading};
} 
export default useGames;
