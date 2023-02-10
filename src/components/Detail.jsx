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
          <div className="row">
            <div className="col-4">
              <img
                className="img-detail"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
                alt=""
              />
            </div>
            <div className="col-10">
              {/* name */}
              <div className="row">
                <div className="col-2">
                  <h4>Name: </h4>
                </div>
                <div className="col-3 ">
                  <h4>{data.name}</h4>
                </div>
              </div>
              <hr />
              {/* abiliti */}
              <div className="ability">
                <div className="row">
                  <div className="col-2">
                    <h4>Abilities:</h4>
                  </div>
                  <div className="col-3">
                    {data.abilities.map((poke) => {
                      return (
                        <>
                          <div className="group">
                            <h4>{poke.ability.name}</h4>
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
                  <div className="col-2">
                    <h4>Type: </h4>
                  </div>
                  <div className="col-3">
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
                  <h4>Weight: </h4>
                </div>
                <div className="col-3">
                  <h4>{data.weight}</h4>
                </div>
              </div>
              <hr />
              {/* height */}
              <div className="row">
                <div className="col-2">
                  <h4>Height: </h4>
                </div>
                <div className="col-3">
                  <h4>{data.height}</h4>
                </div>
              </div>
              <hr />
              {/* Moves */}
              <div className="type">
                <div className="row">
                  <div className="col-2">
                    <h4>Moves: </h4>
                  </div>
                  <div className="col-3">
                    {data.moves.map((poke) => {
                      return (
                        <>
                          <div className="group">
                            <h4>{poke.move.name}</h4>
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
                    <h4>Stats: </h4>
                  </div>
                  <div className="col-3">
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
