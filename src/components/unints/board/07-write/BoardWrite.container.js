import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWriter.presenter";

import { myGraphqlSetting } from "./BoardWrite.quries";

export default function BoardWrite(props) {
  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const [func] = useMutation(myGraphqlSetting);

  const onClickSubmit = async function () {
    const result = await func({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };

  const onChangeWriter = function (event) {
    setWriter(event.target.value);

    if (event.target.value && title && contents) {
      setIsActive(true);
    }
  };

  const onChangeTitle = function (event) {
    setTitle(event.target.value);

    if (writer && event.target.value && contents) {
      setIsActive(true);
    }
  };

  const onChangeContents = function (event) {
    setContents(event.target.value);

    if (writer && title && event.target.value) {
      setIsActive(true);
    }
  };

  return (
    <>
      <div>$$$$$$$$$$$$$$$여기는 컨테이너입니다$$$$$$$$$$$$$$</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isActive={isActive}
      />
      <div>$$$$$$$$$$$$$$$여기는 컨테이너입니다$$$$$$$$$$$$$$</div>
    </>
  );
}
