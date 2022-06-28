import styled from "styled-components";

const BodyBlackout = styled.div`
  position: absolute;
  z-index: 1010;
  left: 0;
  top: 0;
  width: 100%;
  height: 140%;
  background-color: rgba(0, 0, 0, 0.9);
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

//7. 팝업 오른쪽 위에 X버튼을 넣고 누르면 팝업이 닫힘
export default function Blackout({isVisible}) {
    return (
        <div>
            <BodyBlackout isVisible={isVisible}/>
        </div>

    );
}
