import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Item from "./Item";
import Pagination from "./Pagination";
import { perPage } from "../config";

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    items(first: $first, skip: $skip, orderBy: title_DESC) { #createdAt_DESC
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ItemList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
`;

class Items extends Component {
  render() {
    return (
      <Center>
        <Pagination page={this.props.page} />
        <Query
          query={ALL_ITEMS_QUERY}
          //fetchPolicy="network-only" //Sayfaya birsey eklendiginde her sayfa degisiminde verileri tekrar indirdigi icin bir sonraki sayfa degisiminde veriyi tekrar yakalayip indirmesini saglar. Cok istikrarli bir yontem degildir cunku her seferinde tum verileri tekrar tekrar indirir.
          variables={{
            //this.props.page on anki sayfa 1-2-3-4 gibi
            //perPage hersayfada kac item oldugunu tutan config.js de bulunan deger
            skip: this.props.page * perPage - perPage,
            first: perPage,
          }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error {error.message}</p>;
            return (
              <ItemList>
                {data.items.map((item) => {
                  return <Item item={item} key={item.id} />;
                })}
              </ItemList>
            );
          }}
        </Query>
        <Pagination page={this.props.page} />
      </Center>
    );
  }
}

export default Items;
export { ALL_ITEMS_QUERY };
