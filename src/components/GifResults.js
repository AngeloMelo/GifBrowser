import GifInfoBox from './GifInfoBox'

const GifListView = ({gifList}) => {

    return (
        <div className="gif-list">
            
            { gifList.map(gif => GifInfoBox(gif={gif}))  }
            
        </div>
    )
}

export default GifListView
