import React, { useState } from 'react';

import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import AddNew from './Components/AddNew';
import DataTable from './Components/DataTable';
import ButtonAddNew from './Components/ButtonAddNew';
import Data from './Data.json';
import EditForm from './Components/EditForm';


const uuidv4 = require('uuid/v4');

function App() {
  const [state, setState] = useState({
    addNewStatus: true,
    editUserStatus: false,
    StoreData: Data,
    ViewData: Data,
    UserInfor: {},
    editUserMode: true
  });

  const deleteUser = (userInfo) => {
    console.log(userInfo.name);

    var inputs = [];
    //  1st solution
    // state.StoreData.map(value => {
    //   if (value.id !== userInfo.id) {
    //     return (inputs.push(value))
    //   }
    //   return 0;
    // })
    // setState({
    //   ...state,
    //   StoreData: inputs,
    //   ViewData: inputs
    // });

    //  2nd solution
    inputs = state.StoreData.filter(item => item.id !== userInfo.id);
    setState({
      ...state,
      StoreData: inputs,
      ViewData: inputs
    });
  }

  const editUserMethod = (newInfo) => {
    var inputs = [];
    state.StoreData.map(value => {
      if (value.id === newInfo.id) {
        return (inputs.push(newInfo))
      }
      return (inputs.push(value))
    })
    setState({
      ...state,

      editUserMode: true,
      StoreData: inputs,
      ViewData: inputs,
      editUserStatus: false
    });
  }

  const editUser = (userInfo) => {
    console.log(userInfo.name);
    setState({
      ...state,
      editUserStatus: true,
      UserInfor: userInfo,
      editUserMode: false
    })
  }

  const searchByName = (name) => {
    console.log("searchByName");

    var searchValue = [];
    if (name && name.length > 0) {
      state.StoreData.map(value => {
        return (
          value.name.toLowerCase().includes(name.toLowerCase()) ? searchValue.push(value) : 0
        )
      })
    }
    setState({
      ...state,
      ViewData: searchValue && searchValue.length > 0 ? searchValue : state.ViewData
    });
  };

  const summitForm = (input) => {
    //console.log("summitForm");
    input.id = uuidv4();

    var inputs = [];

    state.StoreData.map(value => {
      return (inputs.push(value))
    })
    inputs.push(input);
    setState({
      ...state,
      StoreData: inputs,
      ViewData: inputs,
      editUserMode: true,
    });
  }

  // console.log(state.StoreData)
  // console.log(state.ViewData)
  localStorage.setItem('UserData', JSON.stringify(Data));
  console.log(JSON.parse(localStorage.getItem('UserData')));
  
  return (

    <div className="App">
      <Header />
      <div className="searchForm">
        <div className="container">
          <div className="row">
            <Search searchByNameProps={(name) => searchByName(name)} />
            <div className="col-12">
              <hr />
              {state.editUserStatus ?
                <EditForm
                  info={state.UserInfor}
                  editInfoMethod={(newInfo) => editUserMethod(newInfo)}
                /> : <div></div>}
            </div>
            <DataTable
              editFunc={(userInfo) => editUser(userInfo)}
              deleteFunc={(userInfo) => deleteUser(userInfo)}
              editUserMode={state.editUserMode}
              data={state.ViewData}
            />
            <div className="col-3">
              <ButtonAddNew
                changeAddNewStatus={() => setState({
                  ...state,
                  addNewStatus: !state.addNewStatus,
                  editUserMode: true
                })}
                currentStatus={state.addNewStatus}
              />
              <AddNew
                addStatus={state.addNewStatus}
                summitForm={(input) => summitForm(input)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
