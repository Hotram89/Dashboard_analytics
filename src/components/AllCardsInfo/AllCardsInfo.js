import InfoCard from "components/InfoCard/FoodCard";

const AllCardsInfo = (dto) => {
  let result = dto.dto.cards.profilData.keyData;
  let names = Object.entries(result);

  //ajoute la traduction française à chaque element du tableau
  const traduction = ["Calories", "Protéines", "Glucides", "Lipides"];
  names.map((el, i) => el.push(traduction[i]));

  return names.length < 1 ? (
    <div>pas de donnée</div>
  ) : (
    <ul className="foodList">
      {names.map((el, index) => (
        <InfoCard key={index} type={el[0]} fr={el[2]} unit={el[1]} />
      ))}
    </ul>
  );
};

export default AllCardsInfo;
