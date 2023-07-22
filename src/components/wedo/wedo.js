import '../wedo/wedo.css'
import Card from '../weflex/card';
import bg1 from '../images/we1.png'
import bg2 from '../images/we2.png'
import bg3 from '../images/we3.png'
function Wedo(){

    return(
        <>
        <div className='wedo'>
        <h1>What we do</h1>
        <div id='box'></div>
        </div>
        <div className='crd'>
             <Card imgg={bg1} tittle="Web development"/>
             <Card imgg={bg2} tittle="App development"/>
             <Card imgg={bg3} tittle="Web design"/>
        </div>
        </>
    )
}
export default Wedo;
