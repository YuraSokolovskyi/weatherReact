import React, {useEffect, useState} from "react";
import {useAPP} from "../utils/context";
import {useParams} from "react-router-dom";

const NewsDetails = () => {
    const {get_data, globalState} = useAPP()
    const [detailsNews, setDetailsNews] = useState(null)
    const {title} = useParams()
    
    const updateNews = async (params) => {
        try {
            await get_data()
            const filteredNews = globalState.articles?.filter(item => item.title === params)
            filteredNews.length > 0 
                ? setDetailsNews(filteredNews[0]) 
                : console.error("Params not found!")
        }catch (error){
            console.error(error)
        }
    }

    useEffect(() => {
        updateNews(title)
    }, []);
    
    return (
        <div>
            <h1>{detailsNews.title}</h1>
            <p>{detailsNews.description}</p>
            <img src={detailsNews.urlToImage} alt="news image"/>
        </div>
    )
}

export default NewsDetails
