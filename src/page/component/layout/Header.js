import './Header.css'

function Header(){
    return(
        <header className="header flex">
            <section className='flex'>
                <h1 className='header-h1'>KOREAN AIR</h1>
                <p className='header-p'>방문예약시스템</p>
            </section>
            <ul className='header-ul'>
                <li onClick={(e)=>{
                    window.location.href = './apply'
                }}>방문신청</li>
                <li onClick={(e)=>{
                    window.location.href = './notice'
                }}>공지사항</li>
            </ul>
        </header>
    )
}

export default Header;