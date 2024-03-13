import PrivacyPolicy from '../../detail/footerContent/PrivacyPolicy';
import TermsOfService from '../../detail/footerContent/TermsOfService';
import './FooterContent.css';
import Faq from '../../detail/footerContent/Faq';
import TabLayout from "../../component/layout/TabLayout";

function FooterContent({tab, setTab}){
    
    return(
        <div className="inner">
            <TermsOfService tab={tab} setTab={setTab}/>
            <PrivacyPolicy tab={tab} setTab={setTab}/>
            <Faq tab={tab} setTab={setTab}/>
            <TabLayout tab={tab}/>
        </div>
    )
}
export default FooterContent;
