import { NavLink } from 'react-router-dom';
import '../page/FooterContent.css';

function TabLayout({ tab }) {
    return (
        <nav>
            <div className="ftcon_tab">
                <NavLink to="/term-of-service" activeClassName="active"><button>서비스이용약관</button></NavLink>
                <NavLink to="/privacy-policy" activeClassName="active"><button>개인정보처리방침</button></NavLink>
                <NavLink to="/faq" activeClassName="active"><button>FAQ</button></NavLink>
            </div>
        </nav>
    )
}

export default TabLayout;
