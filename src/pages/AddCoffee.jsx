import { useNavigate } from "react-router-dom";
import CoffeeForm from "../components/coffeeform";

function AddCoffee() {
  const navigate = useNavigate();

  function handleAddCoffee(coffeeData) {
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...coffeeData,
        price: Number(coffeeData.price),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add coffee");
        }

        return response.json();
      })
      .then((newCoffee) => {
        console.log("Coffee added:", newCoffee);
        navigate("/menu");
      })
      .catch((error) => {
        console.error("Error adding coffee:", error);
      });
  }

  return (
    <div>
      <h1>Add Coffee</h1>
      <CoffeeForm onSubmit={handleAddCoffee} />
    </div>
  );
}

export default AddCoffee;
