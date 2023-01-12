import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';


import Header from './components/header/header.component';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    //Giris yapmis olan kullaniciyi boyle yakalariz //Sayfa yenilemeyle bi giris yapmis kullanici gitmez bunun icin bizim ayrica belirli bir sure sonra otomatik cikmayida ayarlamamiz gerekir. 
    //Bunun icinde unsubscribeFromAuth = null yapariz sonrada this.unsubscribeFromAuth = subscribe degerimizi asagidaki gibi yapariz. Ve kullanici tekrar auth u cagirdiginda unsubscribe olarak cikis yapar. 
    //Bunuda componentWillUnmount ile asagida yapariz.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      
      this.setState({currentUser: userAuth})
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
