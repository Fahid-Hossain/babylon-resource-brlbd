import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Foods = () => {
  const [meals, setMeals] = useState([]);
  const [selectedItems, setSelectedItems] = useState("lunch");
  const [mealCatagoryItem, setMealCatagoryItem] = useState([]);

  useEffect(() => {
    fetch("https://hot-onion.herokuapp.com/api/v1/foods")
      .then((res) => res.json())
      .then((data) => setMeals(data.data.foods));
  }, []);

  useEffect(() => {
    const selectedMeals = meals.filter(meal => meal.catagories === selectedItems);
    setMealCatagoryItem(selectedMeals);
}, [selectedItems]);
console.log(mealCatagoryItem);


  return (
    <>
      <div style={{ width: "", margin: "4 auto", display: "flex" }}>
        <Link
          className="text-decoration-none text-dark fs-5 me-4"
          to="/foods/breakfast"
        >
          <Button
            className={selectedItems === "breakfast" ? "active btn" : "btn"}
            onClick={() => setSelectedItems("breakfast")}
          >
            Breakfast
          </Button>
        </Link>
        <Link
          className="text-decoration-none text-dark fs-5 me-4"
          to="/foods/launch"
        >
          <Button className={selectedItems === 'lunch' ? 'active btn' : 'btn'}
                                    onClick={() => setSelectedItems('lunch')}>Launch</Button>
        </Link>
        <Link
          className="text-decoration-none text-dark fs-5 me-4"
          to="/foods/dinner"
        >
          <Button className={selectedItems === 'dinner' ? 'active btn' : 'btn'}
                                    onClick={() => setSelectedItems('dinner')}>Dinner</Button>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Foods;
