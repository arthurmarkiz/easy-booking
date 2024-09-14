import './featuredProperties.css'

export default function FeaturedProperties() {
    return (
        <div className='fp'>
            <div className='fpItem'>
                <img className='fpImg' src="https://cf.bstatic.com/xdata/images/hotel/square240/510148650.jpg?k=baad9a19e2eab39ca70d7d4d3d6183c3872a1e45852b8b5b20b0feb3de14593f&o=" alt="room with two beds" />
                <div className="fpInfos">
                    <span className='fpName'>Regency Copacabana Hotel</span>
                    <span className='fpCity'>Rio de Janeiro</span>
                    <span className='fpPrice'><span>Starting from</span> $320</span>
                    <div className="fpRating">
                        <button>8.9</button>
                        <span>Excellent</span>
                    </div>
                </div>
            </div>
            <div className='fpItem'>
                <img className='fpImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/559654140.webp?k=89e79aa75ec8a78c63c6f97559ec8f893de372401cdde1b4a2ef8fa1b2389631&o=" alt="fancy room" />
                <div className="fpInfos">
                    <span className='fpName'>3 Epoques Apartments</span>
                    <span className='fpCity'>Czech Republic</span>
                    <span className='fpPrice'><span>Starting from</span> $274</span>
                    <div className="fpRating">
                        <button>9.7</button>
                        <span>Fabulous</span>
                    </div>
                </div>
            </div>
            <div className='fpItem'>
                <img className='fpImg' src="https://cf.bstatic.com/xdata/images/hotel/square240/521754563.jpg?k=31d42755da75cacad16467e95ad93da23e486ac582b14e4e79e6592077426201&o=" alt="a fancy pool" />
                <div className="fpInfos">
                    <span className='fpName'>VELINN Roost</span>
                    <span className='fpCity'>São Paulo</span>
                    <span className='fpPrice'><span>Starting from</span> $562</span>
                    <div className="fpRating">
                        <button>8.2</button>
                        <span>Very Good</span>
                    </div>
                </div>
            </div>
            <div className='fpItem'>
                <img className='fpImg' src="https://cf.bstatic.com/xdata/images/hotel/square240/204041981.jpg?k=c6646a6c39127589ee692feca0095460740b3b45d5324dd8ba39c94bf8020a6d&o=" alt="room with two beds" />
                <div className="fpInfos">
                    <span className='fpName'>Lugus Hotel</span>
                    <span className='fpCity'>São Paulo</span>
                    <span className='fpPrice'><span>Starting from</span> $148</span>
                    <div className="fpRating">
                        <button>7.3</button>
                        <span>Good</span>
                    </div>
                </div>
            </div>
        </div>
    )
}