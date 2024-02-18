import React, { useEffect, useState } from "react";
import { useAPP } from "../utils/context";
import {Link} from "react-router-dom";

const News = () => {
    const { get_data, globalState } = useAPP();
    const [inputValue, setInputValue] = useState("");
    console.log(inputValue);
    const fetchData = async () => {
        try {
            await get_data(inputValue);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    function handleInputChage(e) {
        setInputValue(e.target.value);
    }
    function onFormSubmit(e) {
        e.preventDefault();
        fetchData();
    }

    return (
        <div>
            <h1>Top news for you</h1>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder="What you want?"
                    value={inputValue}
                    onChange={handleInputChage}
                />
                <button>Знайти</button>
            </form>
            <div>
                {globalState.articles?.map((newsItem) => {
                    return (
                        <Link to={`news/${newsItem.title}`}>
                            <div key={newsItem.id}>
                                <img src={newsItem.urlToImage} alt="" />
                                <h2>{newsItem.title}</h2>
                                <p>{newsItem.description}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default News;