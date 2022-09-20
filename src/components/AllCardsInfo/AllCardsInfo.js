import InfoCard from "components/InfoCard/FoodCard";
import ApiProvider from "data/ApiProvider";

const AllCardsInfo = (userId) => {
  let listeDeCards = [1, 2, 3];
  let cardList = new ApiProvider().getCardData();
  let result = cardList.filter((el) => el.id === userId.id);
  result = result[0].type;
  console.log(result);
  const names = Object.entries(result);
  console.log(names);

  return listeDeCards.length < 1 ? (
    <div>pas de donnée</div>
  ) : (
    <ul className="foodList">
      {names.map((el, index) => (
        <InfoCard key={index} type={el[0]} />
      ))}
    </ul>
  );
};

export default AllCardsInfo;
