import React, {useState} from 'react'


const Pagination = ({pageSize, totalItems, current, paginate}) => {

    const pages = []
    const stepSize = Math.ceil(totalItems / pageSize)
    for(let i = 1; i<= stepSize; i++)
    {
        pages.push(i)
    }

    const [startIdx, setStartIdx] = useState(0)
    const [subPageSize] = useState(20)

    const moveLeft = () =>{
        if(startIdx === 0) return
        setStartIdx(startIdx - 1)
    }

    const moveRight = () =>{
        if(startIdx + subPageSize >= pages.length) return
        setStartIdx(startIdx + 1)
    }

    const pageButtons = pages
        .slice(startIdx, startIdx + subPageSize)
        .map( (cur, i) => (
            <li className={current === cur ? 'o-page-item page-item active' : 'o-page-item page-item'} key={i}>
                <a className="page-link" href='\#' key={i} onClick={(ev) => {ev.preventDefault(); paginate(cur) } }>{cur}</a>
            </li>
        ))

    return (
        <div className="paginationContainer"> 
            <ul className="pagination pagination-sm">
                <li className={startIdx === 0 ? 'page-item disabled': 'page-item'}>
                    <a className="page-link" href="\#" onClick={(ev) => {ev.preventDefault(); moveLeft() } } >&laquo;</a>
                </li>
                { pageButtons }
                <li className={startIdx + subPageSize >= pages.length ? 'page-item disabled': 'page-item'}>
                    <a class="page-link" href="\#" onClick={(ev) => {ev.preventDefault(); moveRight() } } >&raquo;</a>
                </li>
            </ul>
        </div>
    )
}

export default Pagination
