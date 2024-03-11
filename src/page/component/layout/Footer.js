import './Footer.css';

function Footer(){

    return(
        <div id="footer">
            <div className='ft_wrap'>
                <ul className="footer-ul">
                    <li onClick={()=>{window.location.href = './footerContent'}}>서비스 이용약관</li>
                    <li onClick={()=>{window.location.href = './footerContent'}}>개인정보처리방침</li>
                    <li onClick={()=>{window.location.href = './footerContent'}}>FAQ</li>
                </ul>
                <p>COPYRIGHT©2024 KOREAN AIR. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    )
}

export default Footer;