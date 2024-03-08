import './Header.css'

function Header(){
    return(
        <header id='header'>
            <section>
                <h1>
                    <button type='button'>대한항공방문예약시스템</button>
                </h1>
                <ul className='gnb'>
                    <li onClick={(e)=>{window.location.href = './apply'}}>방문신청</li>
                    <li onClick={(e)=>{window.location.href = './notice'}}>공지사항</li>
                </ul>
            </section>
        </header>
    )
}

export default Header;