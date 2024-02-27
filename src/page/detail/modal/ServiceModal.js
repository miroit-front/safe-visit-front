import './ServiceModal.css';

function ServiceModal(props) {
    const closeModal = () => {
        props.setServiceModalState(false);
    }
    return (
        <div className='serviceModal'>
            <header>
                <span>서비스 이용약관</span>
                <button type='button' onClick={closeModal}>X</button>
            </header>
            <main>
                <section className="main-header">
                    <h3>서비스 이용약관</h3>
                </section>
                <section className='main-post'>
                    대충 어쩌고 저쩌고 내용 들어감
                </section>
            </main>
            <footer>
                <section>
                    <button type='button' onClick={closeModal}>닫기</button>
                </section>
            </footer>
        </div>
    );
}

export default ServiceModal;
