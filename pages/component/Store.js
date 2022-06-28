import {useState} from "react";
import BodyBlackout from "./BodyBlackout";
import Detail from "./Detail";
import axios from "axios";

// 5. STORE 리스트는 정사각형 이미지 그리드로 표현 (REST API 사용)
// 7. 팝업 오른쪽 위에 X버튼을 넣고 누르면 팝업이 닫힘
export default function Store({data}) {
    const [detailData, setDetailData] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const onSetIsVisible = (active) => {
        setIsVisible(active);
    };

    if (data === null) {
        return null;
    }

    return (
        <>
            <div>
                <h1 style={{margin:"30px"}}>EAT</h1><br/>
                <BodyBlackout isVisible={isVisible}/>
                <Detail detailData={detailData} isVisible={isVisible} onSetIsVisible={onSetIsVisible}/>
                {data.map((launch, index) => (
                    <img style={{margin:"15px",display: "inline-grid"}} key={index} src={launch.image} onClick={() => {
                        onSetIsVisible(true)
                        // params 값으로 데이터 이동
                        axios.get("http://localhost:9000/stores", {
                            params: {
                                id: launch.id
                            }
                        })
                            .then(response => {
                                setDetailData(response.data)
                            })
                    }} alt={launch.name}/>
                ))}
            </div>
        </>
    )
}

export async function getServerSideProps() { // 동적으로 관리
    const res = await fetch('http://localhost:9000/stores');
    const data = await res.json();

    return {props: {data},}
}

