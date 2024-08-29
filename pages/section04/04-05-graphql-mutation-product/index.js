import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [func] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async function () {
    const result = await func({
      variables: {
        seller: "hyop",
        createProductInput: {
          name: "iphone",
          detail: "smart phone by apple",
          price: 1000000,
        },
      },
    });
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
