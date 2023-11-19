import React from "react";
import ReactDOM from "react-dom/client";
import { restaurants } from "./constants/mock";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div>
      <h1>{restaurants[0].name}</h1>
      <h2>Меню</h2>
      <ul>
        <li>{restaurants[0].menu[0].name}</li>
        <li>{restaurants[0].menu[1].name}</li>
        <li>{restaurants[0].menu[2].name}</li>
      </ul>
      <h2>Отзывы</h2>
      <ul>
        <li>{restaurants[0].reviews[0].text}</li>
        <li>{restaurants[0].reviews[1].text}</li>
      </ul>
    </div>
    <div>
      <h1>{restaurants[1].name}</h1>
      <h2>Меню</h2>
      <ul>
        <li>{restaurants[1].menu[0].name}</li>
        <li>{restaurants[1].menu[1].name}</li>
      </ul>
      <h2>Отзывы</h2>
      <ul>
        <li>{restaurants[1].reviews[0].text}</li>
        <li>{restaurants[1].reviews[1].text}</li>
        <li>{restaurants[1].reviews[2].text}</li>
      </ul>
    </div>
    <div>
      <h1>{restaurants[2].name}</h1>
      <h2>Меню</h2>
      <ul>
        <li>{restaurants[2].menu[0].name}</li>
        <li>{restaurants[2].menu[1].name}</li>
        <li>{restaurants[2].menu[2].name}</li>
      </ul>
      <h2>Отзывы</h2>
      <ul>
        <li>{restaurants[2].reviews[0].text}</li>
      </ul>
    </div>
    <div>
      <h1>{restaurants[3].name}</h1>
      <h2>Меню</h2>
      <ul>
        <li>{restaurants[3].menu[0].name}</li>
        <li>{restaurants[3].menu[1].name}</li>
      </ul>
      <h2>Отзывы</h2>
      <ul>
        <li>{restaurants[3].reviews[0].text}</li>
        <li>{restaurants[3].reviews[1].text}</li>
      </ul>
    </div>
  </>
);

const root2 = ReactDOM.createRoot(document.getElementById("nojsx"));

root2.render([
  React.createElement("div", {
    children: [
      React.createElement("h1", { children: restaurants[0].name }),
      React.createElement("h2", { children: "Меню" }),
      React.createElement("ul", {
        children: [
          React.createElement("li", { children: restaurants[0].menu[0].name }),
          React.createElement("li", { children: restaurants[0].menu[1].name }),
          React.createElement("li", { children: restaurants[0].menu[2].name }),
        ],
      }),
      React.createElement("h2", { children: "Отзывы" }),
      React.createElement("ul", {
        children: [
          React.createElement("li", {
            children: restaurants[0].reviews[0].text,
          }),
          React.createElement("li", {
            children: restaurants[0].reviews[1].text,
          }),
        ],
      }),
    ],
  }),

  React.createElement("div", {
    children: [
      React.createElement("h1", { children: restaurants[1].name }),
      React.createElement("h2", { children: "Меню" }),
      React.createElement("ul", {
        children: [
          React.createElement("li", { children: restaurants[1].menu[0].name }),
          React.createElement("li", { children: restaurants[1].menu[1].name }),
        ],
      }),
      React.createElement("h2", { children: "Отзывы" }),
      React.createElement("ul", {
        children: [
          React.createElement("li", {
            children: restaurants[1].reviews[0].text,
          }),
          React.createElement("li", {
            children: restaurants[1].reviews[1].text,
          }),
          React.createElement("li", {
            children: restaurants[1].reviews[2].text,
          }),
        ],
      }),
    ],
  }),
  React.createElement("div", {
    children: [
      React.createElement("h1", { children: restaurants[2].name }),
      React.createElement("h2", { children: "Меню" }),
      React.createElement("ul", {
        children: [
          React.createElement("li", { children: restaurants[2].menu[0].name }),
          React.createElement("li", { children: restaurants[2].menu[1].name }),
          React.createElement("li", { children: restaurants[2].menu[2].name }),
        ],
      }),
      React.createElement("h2", { children: "Отзывы" }),
      React.createElement("ul", {
        children: [
          React.createElement("li", {
            children: restaurants[2].reviews[0].text,
          }),
        ],
      }),
    ],
  }),
  React.createElement("div", {
    children: [
      React.createElement("h1", { children: restaurants[3].name }),
      React.createElement("h2", { children: "Меню" }),
      React.createElement("ul", {
        children: [
          React.createElement("li", { children: restaurants[3].menu[0].name }),
          React.createElement("li", { children: restaurants[3].menu[1].name }),
        ],
      }),
      React.createElement("h2", { children: "Отзывы" }),
      React.createElement("ul", {
        children: [
          React.createElement("li", {
            children: restaurants[3].reviews[0].text,
          }),
          React.createElement("li", {
            children: restaurants[3].reviews[1].text,
          }),
        ],
      }),
    ],
  }),
]);
