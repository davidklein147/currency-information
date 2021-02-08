import { Url } from "url";

export interface listModel{
    id: string, 
    symbol: string,
    name: string
}

export interface CoinModel{
    id: null; 
    image: {
        large: null;
    },
    market_data: {
        current_price:{
            ils: number,
            usd: number,
            eur: number
        }
    }
   
}