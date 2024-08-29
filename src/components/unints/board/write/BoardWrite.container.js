import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWriter.presenter";

import { myGraphqlSetting } from "./BoardWrite.quries";

export default function BoardWrite() {
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
  };

  const onChangeTitle = function (event) {
    setTitle(event.target.value);
  };

  const onChangeContents = function (event) {
    setContents(event.target.value);
  };

  return (
    <>
      <div>$$$$$$$$$$$$$$$여기는 컨테이너입니다$$$$$$$$$$$$$$</div>
      <BoardWriteUI
        aaa={onClickSubmit}
        bbb={onChangeWriter}
        ccc={onChangeTitle}
        ddd={onChangeContents}
      />
      <div>$$$$$$$$$$$$$$$여기는 컨테이너입니다$$$$$$$$$$$$$$</div>
    </>
  );
}
