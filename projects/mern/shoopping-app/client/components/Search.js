import React from "react";
import Downshift, { resetIdCounter } from "downshift";
import Router from "next/router";
import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import debounce from "lodash.debounce";
import { DropDown, DropDownItem, SearchStyles } from "./styles/DropDown";

const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    items(
      where: {
        OR: [
          { title_contains: $searchTerm }
          { description_contains: $searchTerm }
        ]
      }
    ) {
      id
      image
      title
    }
  }
`;

const routeToItem = (item) => {
  Router.push({
    pathname: "/item",
    query: {
      id: item.id,
    },
  });
};

class AutoComplete extends React.Component {
  state = {
    items: [],
    loading: false,
  };

  //!debounce ile 350milisecond gecikme sagliyoruz onChangefonksiyonunda. 1000 => 1saniye
  onChange = debounce(async (e, client) => {
    // turn loading on
    this.setState({ loading: true });
    // manually query apollo client
    const res = await client.query({
      query: SEARCH_ITEMS_QUERY,
      variables: { searchTerm: e.target.value },
    });
    this.setState({
      items: res.data.items,
      loading: false,
    });
  }, 350);

  render() {
    {
      /* resetIdCounter Bir hatayi onluyor Video 48 tam anlamadim */
    }
    resetIdCounter();
    return (
      <SearchStyles>
        {/* itemToString sayesinde arama yapildiginda cikan sonuclara tiklandiginda arama inputunda [Object object] yaziyordu Burada ki kullanimla bu sorunu cvozmus olduk ve bundan sonra arama sonucunda cikan item in title i yazacak. */}
        <Downshift
          itemToString={(item) => (item === null ? "" : item.title)}
          onChange={routeToItem}
        >
          {({
            getInputProps,
            getItemProps,
            isOpen,
            inputValue,
            highlightedIndex,
          }) => (
            <div>
              <ApolloConsumer>
                {(client) => (
                  <input
                    {...getInputProps({
                      type: "search",
                      placeholder: "Search",
                      id: "search",
                      className: this.state.loading ? "loading" : "",
                      onChange: (e) => {
                        e.persist();
                        this.onChange(e, client);
                      },
                    })}
                  />
                )}
              </ApolloConsumer>
              {/* DOWNSHIFT AVANTAJLARI */}
              {/* Buradaki isOpen searchda arama yaptigimizda gozuken kisimin sadece isOpen acikken gosterilmesini saglar. Ve Disari tikladigimizda veya esc ye bastigimizda isOpen false olarak gosterimi durdurur. Normalde surekli acik duruyordu bu islem onu onluyor. getInitialprops kismi bunu sagliyor. */}
              {isOpen && (
                <DropDown>
                  {this.state.items.map((item, index) => {
                    return (
                      <DropDownItem
                        key={item.id}
                        //DOWNSHIFT AVANTAJLARI
                        //Burada kisimda asagi yon tusuna basinca aramada cikan dropdownda itemlar arasinda asagi yukari kaymayi saglar yon tuslari ile
                        {...getItemProps({ item })}
                        highlighted={index === highlightedIndex}
                      >
                        <img width="50" src={item.image} alt={item.title} />
                        {item.title}
                      </DropDownItem>
                    );
                  })}
                  {!this.state.items.length && !this.state.loading && (
                    <DropDownItem>Nothing Found {inputValue}</DropDownItem>
                  )}
                </DropDown>
              )}
            </div>
          )}
        </Downshift>
      </SearchStyles>
    );
  }
}

export default AutoComplete;
