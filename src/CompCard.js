import React from "react";
import "./App.css";
import { CompCard } from "./data";

export const Stocks = () => {
  return (
    <>
      <HomePageHeader />
      <div className="flex-container">
        {CompCard.map((data, key) => {
          return (
            <div key={key}>
              <CompCard
                key={key}
                title={data.title}
                pt1={data.pt1}
                pt2={data.pt2}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Your CompCard Tracker</h2>
    </header>
  );
};

const CompCard = ({ title, pt1, pt2}) => {
  if (!title) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{title}</h5>
          </td>
          <td>
            <h5>{pt1}</h5>
          </td>
          <td>
            <h4>{pt2}</h4>
          </td>
        </tr>
      </tbody>
    </table>
  );
};