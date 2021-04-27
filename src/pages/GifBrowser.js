import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import GifResults from '../components/GifResults'
import Pagination from '../components/Pagination'
import SearchField from '../components/SearchField'
import { API_KEY } from '../Config/keys'


const GifBrowser = () => {

    const pageSize = 10
    const [subject, setSubject] = useState(null)
    const [gifList, setGifList] = useState([])

    const [currentPage, setCurrentPage] = useState(0)
    const [paginationResult, setPaginationResult] = useState(null)
    const inputRef = useRef()

    useEffect(()=> {

        const fetchData = async () =>{

            if(!subject) return

            const { data } = await axios.get('https://api.giphy.com/v1/gifs/search', {
                params:{
                    api_key: API_KEY,
                    q: subject,
                    limit: pageSize,
                    offset: (currentPage * pageSize)
                }
            })
              
            setGifList(data.data)
            setPaginationResult(data.pagination)
        }

        fetchData()

    },[subject, currentPage])


    const inputClick = (ev) =>{
        ev.preventDefault()
        setSubject(inputRef.current.value)
    }

    const paginate = page => setCurrentPage(page)

    
    return (
         
        <section className="main-section">
            <SearchField onClick={inputClick} inputRef={inputRef} />
            
            {gifList.length > 0 ? <GifResults gifList={gifList} /> : <></>}

            {gifList.length > 0 ? <Pagination 
                pageSize={pageSize} 
                totalItems={paginationResult?.total_count ?? 0} 
                current={paginationResult?.offset ?? 0} 
                paginate={paginate} 
            /> : <></>}

            
        </section>
    )
}

export default GifBrowser
