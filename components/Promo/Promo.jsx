/** @format */

import { useState, useEffect } from "react";
import { PromoCom } from "./styled";
import Form from "./Form";
import Auth from "./Auth";

const Promo = () => {
  const [pass, setPass] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setPass(localStorage.getItem("pass") === "true");
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem("pass", pass);
  }, [pass, loaded]);

  if (!loaded) return null;

  return <PromoCom>{pass ? <Form /> : <Auth setPass={setPass} />}</PromoCom>;
};

export default Promo;
