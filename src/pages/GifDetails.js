import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { API_KEY } from '../Config/keys'


const GifDetails = () => {

    let { id } = useParams()

    const [gifData, setGifData] = useState({})

    useEffect(() => {
        const fetchData = async () =>
        {
            const { data } = await axios.get(`https://api.giphy.com/v1/gifs/${id}`, {
                params:{
                    api_key: API_KEY,
                    gif_id: id
                }
            })

            setGifData(data.data)
        }

        fetchData()
    }, [id])

    return (
        <section className="main-section">
            <div className="gif-detail">
                <h2>Gif details</h2>
                <div>id: {gifData.id}</div>
                <div>Slug: {gifData.slug}</div>
                <div>Title: {gifData.title}</div>
                <div>Type: {gifData.type}</div>
                <Link to="/">Back</Link>
            </div>
        </section>
    )
}

export default GifDetails
