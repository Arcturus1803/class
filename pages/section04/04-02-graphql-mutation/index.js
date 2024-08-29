import { useMutation, gql } from "@apollo/client";

const myGraphqlSetting = gql`
  mutation {
    createBoard(writer: "hyop", title: "hello world", contents: "helloooooo!") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [func] = useMutation(myGraphqlSetting);

  const onClickSubmit = async function () {
    const result = await func();
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
