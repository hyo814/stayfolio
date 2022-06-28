import React from 'react';
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from "next/link";

const ModalStyle = styled.div`
  position: absolute;
  color: #FFFFFF;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1100;
  display: ${(props) => (props.isVisible ? "block" : "none")};
  pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};
`;

// 6. 하나의 아이템을 선택하면 팝업을 띄우고 맛집 이름과 사진, 설명, 홈페이지 바로가기(url이 있을 경우)를 표현
// 7. 팝업 오른쪽 위에 X버튼을 넣고 누르면 팝업이 닫힘
export default function Detail({isVisible, onSetIsVisible, detailData}) {
    if (detailData === null) {
        return null;
    }
    return (
        <ModalStyle isVisible={isVisible}>
            <Card sx={{width: 1400, height: 680}}>
                <CardActions>
                    <Button type="button" style={{marginLeft:"96%", fontWeight:"700"}} onClick={() => {
                        onSetIsVisible(false)
                    }}> X
                    </Button>
                </CardActions>
                <CardMedia
                    component="img"
                    height="300"
                    p={1}
                    m={2}
                    image={detailData[0].image}
                    alt={detailData[0].name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {detailData[0].name}
                    </Typography>
                    <Typography gutterBottom variant="h6" m={2} p={1} component="div">
                        {detailData[0].description}
                    </Typography>
                    <Typography>
                        - 매장 위치 및 자세히 보기 -<br/>
                        {detailData[0].url !== undefined ?
                            <Link href={detailData[0].url}>{detailData[0].url}</Link> : <p>사이트 준비중 </p>
                        }
                    </Typography>
                </CardContent>

            </Card>
        </ModalStyle>
    );
}
