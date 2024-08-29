const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
];

export default function mapFruitsPage() {
  const aaa = [<div>1 레드향</div>, <div>2 포도</div>, <div>3 산청딸기</div>];

  const bbb = FRUITS.map((el) => (
    <div>
      {el.number} {el.title}
    </div>
  ));

  return (
    <>
      <div>{aaa}</div>
      mmmmmmm
      <div>{bbb}</div>
    </>
  );
}
