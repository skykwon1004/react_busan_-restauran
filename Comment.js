import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

const WRAPPER = styled.div`
  padding: 10px 0;

  button {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 14px;
    width: 50px;
    height: 30px;
  }
`;

const LIST = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #f1f1f1;
  margin: 0 0 20px 0;

  em {
    cursor: pointer;
  }

  .right {
    display: flex;
    flex-direction: column;
    /* outline: 1px solid red; */
  }

  .date {
    display: block;
    margin: 0 0 10px 0;
  }
`;

const COWRAPPER = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  /* strong {
    outline: 1px solid red;
    display: block;
  } */
`;

const Comment = () => {
    const today = new Date();
    // 현재 날짜를 가져옵니다.
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1
        }월 ${today.getDate()}일`;
    // 원하는 형식으로 날짜를 설정합니다.

    const [co, setCo] = useState(["찜이요~", "여기 맛있어요", "추천 감사합니다"]);
    // console.log(co)

    const [like, setLike] = useState([0, 0, 0]);

    function 함수() {
        setLike(like + 1);
    }

    const [입력값, set입력값변경] = useState("");

    // submit 할때 새로고침 막기
    const handleSubmit = (event) => {
        event.preventDefault(); // 새로고침 방지

        // let copy = [...co];
        // copy.push(입력값);
        // setCo(copy);
        // set입력값변경("");
        // console.log(copy);
    };

    const [editIndex, setEditIndex] = useState(-1);
    //   이 코드에서는 editIndex라는 상태를 사용하여 어떤 댓글을 수정 중인지를 추적합니다. editIndex가 -1이면 수정 중이 아니고,
    //   그 외의 값이면 해당 인덱스의 댓글을 수정 중이라고 가정합니다. 수정 중인 댓글은 input 필드와 "저장" 버튼을 렌더링하고, 수정 중이 아닌 댓글은 댓글 텍스트와 "수정" 버튼을 렌더링합니다.
    //   "수정" 버튼을 클릭하면 해당 댓글을 수정 중으로 표시하고, "저장" 버튼을 클릭하면 수정된 내용을 저장하고 수정 모드를 종료합니다.

    const serverURL = "http://125.190.42.149:8000/board/send-comment";

    const handleButtonClick = () => {
        // '입력값'이 비어 있지 않은지 확인하고 URL을 구성합니다.
        if (입력값.trim() === "") {
            return; // '입력값'이 비어 있으면 계속하지 마세요.
        }

        // URL에 포함할 '입력값'을 인코딩합니다.
        const encodedValue = encodeURIComponent(입력값);

        // 인코딩된 '입력값'을 포함하여 URL을 구성합니다.
        const url = `${serverURL}?comment=${encodedValue}`;

        // 구성된 URL을 사용하여 필요한 작업을 수행합니다. 예를 들어 네트워크 요청을 만들기 위해 fetch API 또는 기타 라이브러리를 사용할 수 있습니다.
        // 예제: fetch 사용
        fetch(url)
            .then((response) => {
                // 여기에서 응답을 처리합니다.
            })
            .catch((error) => {
                // 여기에서 오류를 처리합니다.
            });

        // 생성된 URL을 사용하여 필요한 작업을 수행합니다. 여기에서는 URL을 콘솔에 로깅합니다.
        console.log(url);

        // 'co' 상태를 업데이트하거나 필요한 다른 작업을 수행합니다.
        let copy = [...co];
        copy.push(입력값);
        setCo(copy);

        // 제출 후 '입력값' 필드를 지우려면 필요한 경우 다음 줄을 주석 해제합니다.
        // set입력값('');
    };

    return (
        <div className="comment">
            <WRAPPER>
                {/* <Button
                    onClick={() => {
                        // console.log(co.sort())
                        let copy = [...co];
                        setCo(copy.sort());
                    }}
                    className="arr"
                    variant="outline-primary"
                >
                    가나다순 정렬
                </Button > */}

                {co.map((item, index) => (
                    <LIST key={index}>
                        {editIndex === index ? (
                            // Render an input field when editing
                            <COWRAPPER>
                                <input
                                    type="text"
                                    value={co[index]}
                                    onChange={(e) => {
                                        let copy = [...co];
                                        copy[index] = e.target.value;
                                        setCo(copy);
                                    }}
                                />
                                <button onClick={() => setEditIndex(-1)}>저장</button>
                            </COWRAPPER>
                        ) : (
                            // Render the comment text and edit button
                            <COWRAPPER>
                                <strong>
                                    {item}{" "}
                                    <em
                                        onClick={() => {
                                            let copy = [...like];
                                            copy[index] = like[index] + 1;
                                            setLike(copy);
                                        }}
                                    >
                                        ❤
                                    </em>{" "}
                                    {like[index]}
                                </strong>
                                <div className="right"
                                    style={{
                                        display: "flex",
                                        gap: "10px",
                                        flexDirection: "row"
                                    }}>
                                    {/* ... */}
                                    <button
                                        onClick={() => {
                                            setEditIndex(index);
                                        }}
                                    >
                                        수정
                                    </button>
                                    <button
                                        onClick={() => {
                                            let copy = [...co];
                                            copy.splice(index, 1);
                                            setCo(copy);
                                        }}
                                    >
                                        삭제
                                    </button>
                                </div>
                            </COWRAPPER>
                        )}
                    </LIST>
                ))}

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            placeholder="댓글 달기..."
                            type="text"
                            onChange={(e) => {
                                set입력값변경(e.target.value);
                                console.log(입력값);
                            }}
                            value={입력값}
                        />
                        {/* input에서 입력한 값 가져오는 법 */}
                        {/* e.target 은 이벤트 발생한 html 태그 */}
                    </Form.Group>
                    <button type="button" onClick={handleButtonClick}>
                        게시
                    </button>
                </Form>
            </WRAPPER>
        </div>
    );
};

export default Comment;
