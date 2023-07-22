import '../header/header.css'
// import logo from '../images/logo.png'
function Header() {
    return (<>
        <div id="head">
            {/* <img src={logo} className='logo' alt='logo' /> */}
            <h1>High Tech</h1>
            <div className='headli'>
                <a>Home</a>
                <a>About</a>
                <a>What We Do</a>
                <a>Portfolio</a>
                <a>Contact</a>
                <a>login</a>
                <a ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg></a>


            </div>

        </div>
        

    </>

    )
}
export default Header