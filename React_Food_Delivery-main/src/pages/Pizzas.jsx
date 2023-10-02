import React, { useEffect, useState } from "react";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import Helmet from "../components/Helmet/Helmet";
import ReactPaginate from "react-paginate";
import "../styles/pagination.css";
import { useDispatch, useSelector } from "react-redux";
import { selectlistProduct } from "../Redux/Selector/ProductSelector";
import { FETCH_LIST_PRODUCT } from "../Redux/ActionType/ActionType";
import { actionFetchListProductAPI } from "../Redux/Reducer/MenuSliceReducer";

const Pizzas = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const dispatch = useDispatch();
  const stateRedux = useSelector((state) => state);
  const { data: searchedProduct, status, error } = useSelector(
    selectlistProduct
  );

  useEffect(() => {
    dispatch(actionFetchListProductAPI());
  }, [dispatch]);

  const productPerPage = 4;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="All Pizzas">
      <Container>
        <Row>
          {searchedProduct.map((item) => (
            <Col
              lg="3"
              md="4"
              sm="6"
              xs="6"
              key={item.id}
              className="mb-4 mt-4"
            >
              <ProductCard item={item} />
            </Col>
          ))}
          <div className="d-flex justify-content-center mt-4 mb-4">
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={"Prev"}
              nextLabel={"Next"}
              containerClassName="paginationBttns"
            />
          </div>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Pizzas;
