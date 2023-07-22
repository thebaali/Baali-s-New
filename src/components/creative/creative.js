import '../creative/creative.css'
import bg from '../images/banner.jpg'
function Creative() {
    return (
        <>
            <div id="cre-con">
            <img src={bg} className='bg' height={600} width={1599}/>
                <h6>Creative
                    Work Idea</h6>
                <p>There are many variations of passages of Lorem Ipsum<br />
                    available, but the majority have suffered alteration</p>
            </div>
            <div className='btn'>
                    <button className='btn-s'>About Company</button>
                    <button className='btn-s'>Contact</button>
                </div>
        </>
    )
}
export default Creative;