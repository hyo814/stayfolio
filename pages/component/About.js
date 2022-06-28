import Image from "next/image";
import food from "../../styles/image/food.jpg"
// 4. ABOUT엔 간단한 프로젝트 소개 문구 표현 (정적 페이지)
// 이미지 출처 : https://pixabay.com/ko/photos/%eb%b2%bd%eb%8f%8c-%eb%b2%bd-%ec%9d%98%ec%9e%90-%ea%b0%80%ea%b5%ac-1834784/
export default function About({data}) {

    return (
        <div style={{margin:"1% auto",marginLeft:"400px",padding:"50px"}}>
            <Image src={food} alt="food"/><br/>
            <div>next.js를 이용하여 정적인 페이지와 동적인 페이지에 대해 분리 하여 작성 하였으며 </div>
            <div>{data}</div><br/>
            <div>블로그 : ggamjige8888@naver.com</div>
            <div>깃허브 : hyo814</div>
            <div>이름:임효진</div>
        </div>
    )
}

// 정적인 페이지 관리를 위한 getStaticProps
export async function getStaticProps() {
    const data = "Store 클릭시에는 맛집 리스트를 보여주고 리스트 중 하나의 아이템을 선택하면 팝업으로 상세 설명을 보여줍니다."
    return {props: {data},}
}

