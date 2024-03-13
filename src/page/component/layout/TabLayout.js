 function TabLayout({tab}){
    return(
        <nav>
        <ul className="ftcon_tab">
            <li className={tab===0 ? 'active' : ''} onClick={()=>{window.location.href = '/termOfService'}}>서비스이용약관</li>
            <li className={tab===1 ? 'active' : ''}  onClick={()=>{window.location.href = '/privacyPolicy'}}>개인정보처리방침</li>
            <li className={tab===2 ? 'active' : ''}  onClick={()=>{window.location.href = '/faq'}}>FAQ</li>
         </ul>
     </nav>
    )
}

export default TabLayout;