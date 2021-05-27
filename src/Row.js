import axios from './axios';
import React, { useEffect, useState } from 'react'
import "./Row.css"

function Row({setModalVisible,title, fetchUrl, isLargeRow=false,setModalDetails}) {
    const [movies,setMovies]=useState([]);
    const baseUrl="https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl])
    return (
        <div className="row">
            <h2 style={{fontFamily:"Bebas Neue",
                        letterSpacing:"1.3px",}}>{title}</h2>
            <div className="row__posters">
                {movies.map(movie=>
                ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) &&(
                <img onClick={()=>{setModalVisible(true);document.body.style.overflow="hidden";
                setModalDetails(prev=>{
                    let modalDetails={...prev.modalDetails};
                    modalDetails.modalPic=`${baseUrl}${movie.backdrop_path}`
                    modalDetails.modalDescription=movie?.overview
                    modalDetails.modalTitle=movie?.name ||movie?.title||movie?.original_name;
                    return {modalDetails}
                })}} title={movie?.title||movie?.name || movie?.original_name} key={movie.id} className={ `row__poster ${isLargeRow && "row__posterLarge"}`} src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}/>))}
                </div>

        </div>
    )
}

export default Row
