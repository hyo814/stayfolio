import '../../stayfolio/styles/globals.css';
import Header from "./component/Header";
import Footer from "./component/Footer";

// 1. 헤더 - 바디 - 푸터 형식으로 표현
function MyApp({Component, pageProps}) {
    return (
        <>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </>
    )
}

export default MyApp
