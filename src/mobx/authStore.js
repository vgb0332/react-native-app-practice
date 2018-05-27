import { observable } from 'mobx';

class ObservableAuthStore{
    @observable isLoggedIn = false;

    setUser() {
      this.isLoggedIn = true;
    }

    unsetUser(){
      this.isLoggedIn = false;
    }

    getUserStatus(){
      return this.isLoggedIn;
    }
}

const observableAuthStore = new ObservableAuthStore();
export default observableAuthStore;
