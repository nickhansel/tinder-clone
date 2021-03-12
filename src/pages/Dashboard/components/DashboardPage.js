/*
   Dashboard Page 
 */

import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { listClientsDash, listUsers, getUser } from "graphql/queries";
import { createUser as createUserMutation } from "graphql/mutations";
import { Pagination } from "antd";
import DashboardClientList from "./DashboardClientList";
import MoodFilter from "./DashboardMoodFilter";
import DashboardSort from "./DashboardSort";
import { Layout, Note2, Loading } from "common";
import { DASHBOARD_TITLE, NUM_EACH_PAGE } from "../constants";
import { FlexContainer } from "./styles";
import { filterDataByMood, CURRENT_USER } from "utils";
import "./styles.css";
var jsforce = require('jsforce');

const domain ='https://empava-dev-ed.my.salesforce.com'
const callbackUrl ='https://www.empava-dev.com/api/callback'
const consumerKey ='3MVG9kBt168mda__pzQ.aoD3KEYm00tt_pgtML_t97zFkkLW2qWIDlsK5Esa9BMDtyvKk55XtChBtVAso7M1A'
const consumerSecret ='BDA201F244D0B67341126518D5258C758BBFD1AEC94347DD4687506AEF877E41'



const DashboardPage = ({ history }) => {
  const [moodId, setMoodId] = useState("all");
  const [filtering, setFiltering] = useState(false);
  const [page, setPage] = useState(1);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(NUM_EACH_PAGE);
  const [authUserData, setAuthUserData] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [contactRecords, setContactRecords] = useState([]);
  // get user from out db
  const { data: userData } = useQuery(gql(getUser), {
    variables: { id: authUserData.id },
    notifyOnNetworkStatusChange: true,
  });

  const [
    createUser, {
     loading: creatingUser,
    }
  ] = useMutation(gql(createUserMutation), { 
    refetchQueries: [{
      query: gql(getUser),
      variables: { id: authUserData.id },
    }]
  });

  useEffect(() => {
    Auth.currentUserInfo()
      .then((data) => {
        console.log(data)
        setAuthUserData(data);
      })
      .catch((err) => console.log("error: ", err));

    var conn = new jsforce.Connection({
      oauth2 : {
        // you can change loginUrl to connect to sandbox or prerelease env.
        clientId: consumerKey,
        clientSecret: consumerSecret,
        redirectUri: callbackUrl,
      },
      instanceUrl: domain,
    });
    conn.login('asiya@empava.io', 'Redicecre19CXwVkKF5oc9SLsKd9ACCH8ja', function(err, userInfo) {
      if (err) { return console.error(err); }
      // Now you can get the access token and instance URL information.
      // Save them to establish connection next time.
      console.log(conn.accessToken);
      console.log(conn.instanceUrl);
      // logged in user property
      console.log(userInfo);
      console.log("User ID: " + userInfo.id);
      console.log("Org ID: " + userInfo.organizationId);
      // conn.query("SELECT Id, Name, CreatedDate FROM Account", function(err, result) {
      //   if (err) { return console.error(err); }
      //   console.log(result);
      //   setSalesRecords(result.records)
      // });
      conn.sobject("Contact")
        .select('*, Account.*') // asterisk means all fields in specified level are targeted.
        .execute(function(err, records) {
          console.log(records)
          setContactRecords(records)
          for (var i=0; i<records.length; i++) {
            var record = records[i];
            // console.log("First Name: " + record.FirstName);
            // console.log("Last Name: " + record.LastName);
            // // fields in Account relationship are fetched
            // console.log("Account Name: " + record.Account.Name); 
          }
        });
    });
  }, []);



  useEffect(() => {
    if (userData && userData.getUser === null) {
      createUser({
        variables: {
          input: {
            id: authUserData.id,
            name: authUserData.username,
            email: authUserData.attributes.email
          },
        },
      })
    }
  }, [userData]);

  const { loading, data, error } = useQuery(gql(listClientsDash), {
    filter: {
      contactId: CURRENT_USER,
    },
  });

  if (loading || creatingUser) {
    return (
      <Layout>
        <div style={{ marginTop: 200 }}>
          <Loading />
        </div>
      </Layout>
    );
  }

  const isLoaded = !loading && !error;
  const clientsData = isLoaded // TODO change to API filtering
    ? filterDataByMood(data.listClients.items, moodId)
    : [];
  const totalClients = clientsData.length;

  const moodFilter = (
    <MoodFilter setMoodId={setMoodId} setFiltering={setFiltering} />
  );

  const mappedClientData = [];
  clientsData.map((client) => {
    return contactRecords.forEach((record) => {
      if (client.id === record.Id) {
        mappedClientData.push( {...client, ...record})
      }
    })
  })

  const onChange = (page) => {
    // Pagination
    setPage(page);
    setMinVal((page - 1) * NUM_EACH_PAGE);
    setMaxVal(page * NUM_EACH_PAGE);
  };

  const cardListProps = {
    contactRecords, 
    data: mappedClientData,
    history,
    minVal,
    maxVal,
  };
  const paginationProps = {
    current: page,
    defaultCurrent: 1,
    onChange: onChange,
    pageSize: 8,
    showTotal: (total) => <Note2>Total {totalClients} clients</Note2>,
    total: totalClients,
  };

  const renderClients = filtering ? (
    <div style={{ marginTop: 200 }}>
      <Loading />
    </div>
  ) : (
      <DashboardClientList {...cardListProps} />
    );
  // refetch()
  return (
    <Layout title={DASHBOARD_TITLE} extra={moodFilter}>
      <FlexContainer>
        <DashboardSort />
        <Pagination
          {...paginationProps}
        />
        <div>{userData && userData.getUser ? userData.getUser.id : "nothing"}</div>
      </FlexContainer>
      {renderClients}
    </Layout>
  );
};

export default DashboardPage;
