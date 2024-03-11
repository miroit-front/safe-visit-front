function AgreementStep({onNext}){
    return(
        <div>
            <section>
                <h4>약관 동의</h4>
                <p>약관 및 개인정보 수집 이용에 동의 해주세요</p>
            </section>
            <section>
                <input type="checkbox"/>
                <p>이용약관 동의(필수) 및 개인정보 수집 이용 동의(필수)에 모두 동의합니다.</p>
            </section>

            <button onClick={onNext}>다음</button>
        </div>
    )
}
export default AgreementStep;