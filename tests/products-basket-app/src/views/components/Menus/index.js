import Axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { addBasket } from "../../../store/actions";

function Menus({ dispatch, products }) {
  const [selected, setSelected] = useState(null);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (selected) {
      const fetchData = async () => {
        const { data } = await Axios.get(
          `https://fakestoreapi.com/products/${selected}`
        );
        setInfo(data);
      };
      fetchData();
    }
  }, [selected]);

  return (
    <div className="menus">
      {products.map((item) => {
        return (
          <div
            className="menusItem"
            key={item.id}
            onClick={() => {
              setSelected(item.id);
            }}
            style={{
              background: `url(${item.image}) no-repeat center center / cover`,
            }}
          >
            <div className="menusItemText">
              <p style={{ height: 20, overflow: "hidden" }}>{item.title}</p>
              <p>Created : {item.created}</p>
              <p>Released : {item.released}</p>
              <p>Price : {item.price}$</p>
            </div>
            <div
              className="menusItemColor"
              style={{ backgroundColor: item.color }}
            ></div>
          </div>
        );
      })}
      <Modal
        isOpen={info}
        style={{
          overlay: customStyles.overlay,
          content: {
            ...customStyles.content,
            width: "min-content",
            height: "min-content",
            overflow: "hidden",
          },
        }}
        onRequestClose={() => {
          setSelected(null);
          setInfo(null);
        }}
        shouldCloseOnEsc={true}
        closeTimeoutMS={400}
      >
        {!info ? (
          <p>Loading...</p>
        ) : (
          <div className="card" style={{ width: 18 * 16 }}>
            <img src={info.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{info.title}</h5>
              <p className="card-text">{info.description}</p>
              <div
                className="btn btn-primary"
                onClick={() => {
                  dispatch(addBasket(info));
                  setSelected(null);
                  setInfo(null);
                }}
              >
                Add to Cart
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 3,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
  },
};

const mapStateToProps = (state) => {
  return {
    basket: state.main.basket,
  };
};

export default connect(mapStateToProps)(Menus);
