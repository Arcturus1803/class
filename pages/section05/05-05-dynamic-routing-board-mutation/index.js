import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

const myGraphqlSetting = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const [func] = useMutation(myGraphqlSetting);

  const onClickSubmit = async function () {
    try {
      const result = await func({
        variables: {
          writer: "hyop",
          title: "hello world",
          contents: "hellooooo",
        },
      });
      console.log(result);
      console.log(result.data.createBoard.number);
      router.push(
        `/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
