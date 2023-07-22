import img1 from '../images/prot1.png'
import '../dashboard/dashboard.css'
function Dashboard() {
    return (
        <>
            <div id="dash">
                <div className="dash-flex">
                    <img src={img1} className='img1' />
                    <div className='port'>
                        {/* <div id='icons'>
                            <a className='srh'><svg viewBox="-6.4 -6.4 76.80 76.80" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000">
                                <g id="SVGRepo_bgr" stroke-width="0"><rect x="-6.4" y="-6.4" width="76.80" height="76.80" rx="38.4" 
                                fill="#ffffff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" 
                                stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                                    <circle cx="32" cy="32" r="24"></circle>
                                    <circle cx="28" cy="28" r="8"></circle><line x1="44" y1="44" x2="33.66" y2="33.66"></line></g></svg></a>
                        </div> */}
                    </div>

                </div>
            </div>
        </>
    )
}
export default Dashboard;