import React from "react";
import { Button, Card, Modal, ListGroup, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

const ListCard = ({ poke, loading, info, data }) => {

  return (
    <>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        poke.map((itm) => {
          return (
            <>
      
            <ListGroup className="list" key={itm.id}>
              <ListGroup.Item className="list-pkm shadow">
                <div className="row" onClick={() => {info(itm)}} >
                  <div className="col-2">
                    <img
                      className="img-card" 
                      src={itm.sprites.front_default}
                      alt="gambar"
                    />
                  </div>
                  <div className="col-8">
                    <h3 className="text-name">{itm.name}</h3>
                  </div>
                  
                </div>
              </ListGroup.Item>
            </ListGroup>
            
            </>
          );
        })
      )}
    </>
  );
};

export default ListCard;
