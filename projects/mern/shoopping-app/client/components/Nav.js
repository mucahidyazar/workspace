import React from "react";
import { Mutation } from "react-apollo";
import { TOGGLE_CART_MUTATION, LOCAL_STATE_QUERY } from "../lib/withData";
import Link from "next/link";
import NavStyled from "./styles/NavStyles";
import User from "./User";
import SignOut from "./SignOut";
import CartCount from "./CartCount";

export default function Nav() {
  return (
    <User>
      {({ data: { me } }) => (
        <NavStyled data-test="nav">
          <Link href="/items">
            <a>Shop</a>
          </Link>
          {me && (
            <>
              <Link href="/sell">
                <a>Sell</a>
              </Link>
              <Link href="/orders">
                <a>Orders</a>
              </Link>
              <Link href="/me">
                <a>Account</a>
              </Link>
              <SignOut />
              <Mutation mutation={TOGGLE_CART_MUTATION}>
                {(toggleCart) => {
                  return (
                    <button onClick={toggleCart}>
                      My Cart{" "}
                      <CartCount
                        //Her itemi farkli itemi 1 tane gostermek yerine bir itemdan 3 tane sepete atilirsa 3 olarak gosterir
                        count={me.cart.reduce(
                          (tally, cartItem) => tally + cartItem.quantity,
                          0
                        )}
                      />
                    </button>
                  );
                }}
              </Mutation>
            </>
          )}
          {!me && (
            <Link href="/signup">
              <a>Sign in</a>
            </Link>
          )}
        </NavStyled>
      )}
    </User>
  );
}
