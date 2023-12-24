import "../styles/card.css"
import { Link } from "react-router-dom";
import {useState,useEffect} from "react";

const Home = () => {
    const [restaurant, setRestaurant] = useState("Click the button below to find a restaurant");
    const [rLink, setRLink] = useState("#");
    const [activity, setActivity] = useState("Click the button below to find an activity to do.");
    let rArray = [];
    let aArray = [];

    function updateRestaurant() {
        setRestaurant("Loading...");
        if (rArray.length !==0) {
            let ranIndex = Math.floor(Math.random()*rArray.length);
            console.log(ranIndex);
            setRestaurant(rArray[ranIndex][0]);
            setRLink(rArray[ranIndex][1]);
        }
        else {
            setRestaurant("Error. Refresh Page");
        }

    }
    function updateActivities() {
        setActivity("Loading...");
        if (aArray.length !==0) {
            let ranIndex = Math.floor(Math.random()*aArray.length);
            console.log(ranIndex);
            setActivity(aArray[ranIndex][0]);
        }
        else {
            setActivity("Error. Refresh Page");
        }
    }

    useEffect(() => {
        const doSomething = async() => {
            try {
                const response = await fetch("https://api.airtable.com/v0/app83mzQj8FltIJb7/Resturants?maxRecords=200&view=Grid%20view", {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer patiDHyd3qCh9HKUL.8d3f0bf8dbfa7197388bac6f9f03ceab98d68ec6d9cf65d7d87cacd75e76bcad'
                    },
                });
                const responseJson = await response.json();
                let responseArr =  responseJson.records;
                for (let i=0; i<responseArr.length; i++) {
                    let fields = responseArr[i].fields;
                    rArray.push([
                        fields.Resturant,
                        fields.Link
                    ])
                }

            } catch (e) {
                alert(`Error: ${e.message}`);
            }
            try {
                const response = await fetch("https://api.airtable.com/v0/app83mzQj8FltIJb7/Activities?maxRecords=200&view=Grid%20view", {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer patiDHyd3qCh9HKUL.8d3f0bf8dbfa7197388bac6f9f03ceab98d68ec6d9cf65d7d87cacd75e76bcad'
                    },
                });
                const responseJson = await response.json();
                let responseArr =  responseJson.records;
                for (let i=0; i<responseArr.length; i++) {
                    let fields = responseArr[i].fields;
                    aArray.push([
                        fields.Activities
                    ])
                }

            } catch (e) {
                alert(`Error: ${e.message}`);
            }
            return () => {}
        }
        doSomething();
    }, );

    return (
        <div className="container-fluid">
            <div className="col-md-2"></div>
            <div className="col-md-4 text-center">
                <div className="card text-center">
                    <div className="card-header">
                        Find a Restaurant
                    </div>
                    <div className="card-body ">
                        <br/>
                        <a href={rLink} target="_blank"><p className="card-text">{restaurant}</p></a><br/>
                        <a className="btn btn-danger mb-5" onClick={updateRestaurant}>Find A Restaurant</a>
                        <div className="p-4"><br/></div>
                    </div>
                </div>
                <div className="p-5"><br/></div>
                <Link to="/addRestaurant">
                    <btn className="btn btn-success mb-5">Add a Restaurant to the List</btn>
                </Link><br/><br/>
                <a href="https://airtable.com/app83mzQj8FltIJb7/shr8k0LhqAbO5GqUp" target="_blank">
                    <btn className="btn btn-primary mb-5">View the Restaurant List</btn>
                </a>
            </div>
            <div className="col-md-4 text-center">
                <div className="card text-center">
                    <div className="card-header">
                        Find an Activity
                    </div>
                    <div className="card-body ">
                        <br/>
                        <p className="card-text">{activity}</p><br/>
                        <btn className="btn btn-danger mb-5" onClick={updateActivities}>Find An Activity</btn>
                        <div className="p-4"><br/></div>
                    </div>
                </div>
                <div className="p-5"><br/></div>
                <Link to="/addActivity" ><btn className="btn btn-success mb-5">Add An Activity to the List</btn></Link><br/><br/>
                <a href="https://airtable.com/app83mzQj8FltIJb7/shruNDhcfRNBNGwFI" target="_blank"><btn className="btn btn-primary mb-5">View the Activity List</btn></a>
            </div>
            <div className="col-sm-2"></div>
        </div>
    )

};
export default Home;

