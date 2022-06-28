import {useRouter} from "next/router";
import Image from "next/image";
import food from "../styles/image/food.jpg";
// 8. 정의하지 않은 url로 접근시 에러 페이지를 보여주고 5초 후 메인 페이지로 이동
// 이미지 출처 : https://pixabay.com/ko/photos/%eb%b2%bd%eb%8f%8c-%eb%b2%bd-%ec%9d%98%ec%9e%90-%ea%b0%80%ea%b5%ac-1834784/
export default function Custom404() {
    // 404 확인 시 5초 뒤 이동
    const router = useRouter()

    setTimeout(()=> {
        router.push("/")
    },5000)
    return (
        <div style={{margin:"1% auto",marginLeft:"400px",padding:"50px"}}>
            <h1>404 Error - Page Not Found</h1>
                <Image src={food} alt="food"/><br/>
        </div>
    )
}
