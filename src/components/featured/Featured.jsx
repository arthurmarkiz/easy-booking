import './featured.css'

export default function Featured() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <img className='featuredImg' src="https://jpimg.com.br/uploads/2023/05/turismo-no-rio-de-janeiro-veja-o-que-visitar-na-cidade-maravilhosa.jpg" 
                alt="panoramic view of the city of Rio de Janeiro" />
                <div className="featuredTitles">
                    <h1>Rio de Janeiro</h1>
                    <h2>162 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className='featuredImg' src="https://www.wunderlustlondon.co.uk/wp-content/uploads/2021/06/is-london-a-town-or-a-city.jpg" 
                alt="city of London" />
                <div className="featuredTitles">
                    <h1>London</h1>
                    <h2>94 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className='featuredImg' src="https://belvitur.com.br/wp-content/uploads/2023/06/Silver-Origin1-2023-06-16T003257.199-1-2048x1102.jpg" 
                alt="panoramic view of the city of Santiago" />
                <div className="featuredTitles">
                    <h1>Santiago</h1>
                    <h2>138 properties</h2>
                </div>
            </div>
        </div>
    )
}