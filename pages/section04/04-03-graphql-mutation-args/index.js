import { useMutation, gql } from "@apollo/client";

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
  const [func] = useMutation(myGraphqlSetting);

  const onClickSubmit = async function () {
    const result = await func({
      variables: {
        writer: "hyop",
        title: "hello world",
        contents: "hellooooo",
      },
    });
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
