import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import groupBy from "lodash.groupby";

import Topbar from "./Topbar";
import octomonkey from "./octomonkey.svg";
import allLists from "./lists";

const Home = () => (
  <div className="min-h-screen bg-grey-lighter font-sans text-black tracking-tight">
    <Topbar />

    <div className="max-w-xl mx-auto text-center">
      <img
        src={octomonkey}
        width="190"
        height="190"
        draggable="false"
        className="mt-12"
        alt="Octomonkey welcomes you!"
      />

      <p className="text-xl mx-auto leading-normal pb-6" style={{ maxWidth: 480 }}>
        Welcome to List.community, a website that lets you browse and search awesome lists more
        easily.
      </p>

      {Object.entries(groupBy(allLists, "category")).map(([category, lists]) => (
        <Fragment key={category}>
          <h2 className="py-6 text-xl">{category}</h2>

          <ul className="list-reset clearfix pb-6">
            {lists.map(list => (
              <li
                key={list.slug}
                className="w-3/5 md:w-1/2 lg:w-1/3 md:float-left mx-auto"
                style={{ minWidth: 320 }}>
                <Link
                  to={list.slug}
                  className="blue-shadow link-reset py-8 px-6 m-4 md:h-64 block text-center rounded-lg overflow-hidden border border-grey-light leading-normal">
                  <img
                    src={`${list.logo}?size=128`}
                    width="64"
                    height="64"
                    className="mb-2 inline-block"
                    draggable="false"
                    alt={`${list.label} logo`}
                  />
                  <strong className="text-xl mb-3 block">{list.label}</strong>
                  <span>{list.shortDescription}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Fragment>
      ))}
    </div>

    <Helmet>
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Helmet>
  </div>
);

export default Home;
