import React, { useState } from 'react'
import Banner from './Banner'
import "./HomeScreen.css"
import Modal from './Modal'
import Nav from './Nav'
import requests from './Requests'
import Row from './Row'

function HomeScreen() {
    const [modalVisible,setModalVisible]=useState(false);
    const [modalDetails,setModalDetails]=useState({
        modalPic:"",
        modalDescription:"",
        modalTitle:""})
    return (
        <div className="homeScreen">
            <Nav/>
            <Banner/>
            {modalVisible && <Modal modalDetails={modalDetails} setModalDetails={setModalDetails} setModalVisible={setModalVisible}/>}
            <Row setModalVisible={setModalVisible} setModalDetails={setModalDetails} title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Row setModalVisible={setModalVisible} setModalDetails={setModalDetails} title='TRENDING NOW' fetchUrl={requests.fetchTrending}/>
            <Row setModalVisible={setModalVisible} setModalDetails={setModalDetails} title='TOP RATED' fetchUrl={requests.fetchTopRated}/>
            <Row setModalVisible={setModalVisible} setModalDetails={setModalDetails} title='ACTION MOVIES' fetchUrl={requests.fetchActionMovies}/>
            <Row setModalVisible={setModalVisible} setModalDetails={setModalDetails} title='COMEDY MOVIES' fetchUrl={requests.fetchComedyMovies}/>
            <Row setModalVisible={setModalVisible} setModalDetails={setModalDetails} title='HORROR MOVIES' fetchUrl={requests.fetchHorrorMovies}/>
            <Row setModalVisible={setModalVisible} setModalDetails={setModalDetails} title='ROMANCE MOVIES' fetchUrl={requests.fetchRomanceMovies}/>
            <Row setModalVisible={setModalVisible} setModalDetails={setModalDetails} title='DOCUMENTARIES' fetchUrl={requests.fetchDocumentaries}/>
        </div>
    )
}

export default HomeScreen
