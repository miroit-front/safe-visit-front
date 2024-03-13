import './FooterContent.css';
import TabLayout from "../../component/layout/TabLayout";
import TermsOfService from '../../detail/footerContent/TermsOfService';
import PrivacyPolicy from './../../detail/footerContent/PrivacyPolicy';
import Faq from './../../detail/footerContent/Faq';

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
