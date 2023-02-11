import React from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";

const Detail = ({ data }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <div className=" row">
            
              <img
                className="img-detail"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
                alt=""
              />
            <div className="right col-12">
              {/* name */}
              <div className="row">
                <div className="col-2">
                  <h4 className="title-detail">Name: </h4>
                </div>
                <div className="detail-text col-10 ">
                  <h4>{data.name}</h4>
                </div>
              </div>
              <hr />
              {/* abiliti */}
              <div className="ability">
                <div className="row">
                  <div className="col-2">
                    <h4 className="title-detail">Abilities:</h4>
                  </div>
                  <div className="detail-text col-10">
                    {data.abilities.map((poke) => {
                      return (
                        <>
                          <div className="group">
                            <ul>
                              <li><h4>{poke.ability.name}</h4></li>
                            </ul>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <hr />
              {/* type */}
              <div className="type">
                <div className="row">
                  <div className="detail-text  col-2">
                    <h4 className="title-detail">Type: </h4>
                  </div>
                  <div className="detail-text  col-10">
                    {data.types.map((poke) => {
                      return (
                        <>
                          <div className="group">
                            <h4>{poke.type.name}</h4>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <hr />
              {/* weight */}
              <div className="row">
                <div className="col-2">
                  <h4 className="title-detail">Weight: </h4>
                </div>
                <div className="detail-text  col-10">
                  <h4>{data.weight}</h4>
                </div>
              </div>
              <hr />
              {/* height */}
              <div className="row">
                <div className="col-2">
                  <h4 className="title-detail">Height: </h4>
                </div>
                <div className="detail-text  col-10">
                  <h4 className="title-detail">{data.height}</h4>
                </div>
              </div>
              <hr />
              {/* Moves */}
              <div className="moves" >
                <div className="row">
                  <div className="col-2">
                    <h4 className="title-detail">Moves: </h4>
                  </div>
                  <div className="mve  col-10 " fluid>
                    {data.moves.map((poke) => {
                      return (
                        <>
                          <div className="group" fluid>
                            <ul>
                              <li><h4>{poke.move.name}</h4></li>
                            </ul>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <hr />
              {/* Stats */}

              <div className="stats">
                <div className="row">
                  <div className="col-2">
                    <h4 className="title-detail">Stats: </h4>
                  </div>
                  <div className="detail-text  col-10">
                    {data.stats.map((poke) => {
                      return (
                        <>
                          <div className="group">
                            <h4>
                              {poke.stat.name}:{poke.base_stat}
                            </h4>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
