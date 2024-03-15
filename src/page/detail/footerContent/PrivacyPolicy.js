import TabLayout from "../../component/layout/TabLayout";

function PrivacyPolicy(){
    return(
        <div className="inner">
            <TabLayout/>
            <div className="footercon_tit privacy_box">
                <div>
                    <h3>개인정보처리방침</h3>
                    <p>대한항공 방문 예약 시스템은 개인정보보호법률을 준수하고 있습니다.</p>
                </div>
                <div className="selectBox">
                    <select className="selectBtn">선택
                        <option value="title">개인정보처리방침 2023.10.31</option>
                        <option className="content">개인정보처리방침 2023.10.31</option>
                    </select>
                </div>
            </div>
            <div className="footercon_wrap">
                <h4>제 1 장 총칙</h4>
                <h5>제1조 개인정보처리방침의 의의</h5>
                <p>본 개인정보처리방침은 ㈜대한항공(이하”대한항공”)의 개인정보 주체와 관련된 개인정보 처리 및 보호와 정보통신망 안전성확보에 대하여 규정하고 있습니다.</p>
                <p>개인정보 주체는 개인정보에 접근하거나, 수정 또는 삭제, 개인정보의 처리를 제한할 수 있는 권리를 포함한 여러 가지 권리를 지닙니다. 정보주체에 대해 처리하는 개인정보, 처리 목적 및 법적 근거, 정보주체의 권리를 본 방침의 각 조항을 클릭하여 확인하실 수 있습니다.</p>
                <p>정보주체의 개인정보와 당사의 개인정보 보호 능력에 대한 정보주체의 신뢰는 대한항공 사업의 핵심입니다. 대한항공은 정보주체의 개인정보를 보호하고, 불법적인 개인정보유출 및 손해 발생을 방지함에 최선의 노력을 다하겠습니다.</p>
                <p>대한항공의 개인정보처리방침은 개인정보보호법 등 국내의 개인정보 보호 법령에 근거하며, 법률의 제·개정 및 정부지침의 변경 또는 대한항공 내부 방침의 변경에 따라 바뀔 수 있으므로 수시로 확인하여 주시기 바랍니다.</p>
                <h5>제2조 (용어의 정의)</h5>
                <p>1. 개인정보의 정의<br />
                    "개인정보"란 식별된 또는 식별 가능한 개인과 직간접적으로 연관된 모든 정보를 의미합니다.</p>
            </div>
        </div>
    )
}

export default PrivacyPolicy;