import React from "react";
import { FaGamepad, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const ButtonCreateGame = () => (
  <Link to="/games/create-game" className="btn btn-primary btn-sm py-0 px-1">
    <FaPlus className="me-1"/>
    <FaGamepad />
  </Link>
);

export default ButtonCreateGame;
