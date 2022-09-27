import { useGlobalContext } from "../context/mealsContext";
import { BsHandThumbsUp } from "react-icons/bs";
const Meals = () => {
  const { meals, loading, selectMeal } = useGlobalContext();
  //   console.log(meals);

  if (loading) {
    return (
      <section className="section">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Foods_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif"
          alt=""
          style={{
            width: "500px",
            marginLeft: "20rem",
          }}
        />
      </section>
    );
  } else {
    return meals.length ? (
      <section className="section-center">
        {meals?.map((singleMeal) => {
          const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
          return (
            <article key={idMeal} className="single-meal">
              <img
                src={image}
                style={{ width: "200px" }}
                className="img"
                onClick={() => selectMeal(idMeal)}
              />
              <footer>
                <h5>{title}</h5>
                <button className="like-btn">
                  <BsHandThumbsUp />
                </button>
              </footer>
            </article>
          );
        })}
      </section>
    ) : (
      <section className="section">
        <h2>No meals matched your search term. Please try again.</h2>
        <img
          src="https://c.tenor.com/ZxEdoFmG3xsAAAAC/spongebob-squarepants-eating-food.gif"
          alt=""
          style={{
            width: "500px",
            marginLeft: "20rem",
          }}
        />
      </section>
    );
  }
};
export default Meals;
