import InfoCard from "components/InfoCard/FoodCard";

const AllCardsInfo = () => {
  let listeDeCards = [1, 2, 3];

  return (
    <ul className="foodList">
      {listeDeCards.map((el, index) => (
        <InfoCard key={index} />
      ))}
    </ul>
  );
};

export default AllCardsInfo;
