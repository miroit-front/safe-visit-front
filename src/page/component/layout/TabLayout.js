 function TabLayout({tab}){
    return(
        <nav>
        <ul className="ftcon_tab">
            <li className={tab===0 ? 'active' : ''} onClick={()=>{window.location.href = '/footerContent/termOfService'}}>서비스이용약관</li>
            <li className={tab===1 ? 'active' : ''}  onClick={()=>{window.location.href = '/footerContent/privacyPolicy'}}>개인정보처리방침</li>
            <li className={tab===2 ? 'active' : ''}  onClick={()=>{window.location.href = '/footerContent/faq'}}>FAQ</li>
         </ul>
     </nav>
    )
}

export default TabLayout;