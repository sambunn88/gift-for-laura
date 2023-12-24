import {useState} from "react";
import { useNavigate } from "react-router-dom";
const AddRes = () => {
    const [restaurant, setRestaurant] = useState();
    const [rLink, setRLink] = useState();
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await fetch('https://api.airtable.com/v0/app83mzQj8FltIJb7/Resturants', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer patiDHyd3qCh9HKUL.8d3f0bf8dbfa7197388bac6f9f03ceab98d68ec6d9cf65d7d87cacd75e76bcad'
                },
                body: JSON.stringify({"fields": {"Resturant": restaurant, "Link": rLink}})
            });
            const status = response.status;
            const responseJson = await response.json();
            console.log('responseJson', responseJson);
            if (status === 200) {
                alert('Successfully Added Restaurant to List');
                navigate('/choose');
            }
        }
        catch (e) {
            alert(`Error: ${e.message}`);
        }
    }
    return (
        <div className="container-fluid text-center">
            <div className="row content">
                <div className="col-sm-2">

                </div>

                <div className="col-sm-8 text-left">
                    <h1>Add a Restaurant Below</h1>
                    <p>Use the form below to add a restaurant to the list.</p>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="rest">Restaurant</label>
                                <input className="form-control" type="text" id="rest" name="rest" value={restaurant}
                                       onChange={(e) => setRestaurant(e.target.value)}/>
                            </div>
                            <div className="col">
                                <label htmlFor="link">Link to Restaurant's Website</label>
                                <input className="form-control" type="text" id="link" name="link" value={rLink}
                                       onChange={(e) => setRLink(e.target.value)}/>
                            </div>
                            <div className="col"><br/></div>
                        </div>

                        <input className="btn btn-primary" type="submit" value="Submit"/>
                        <input className="btn btn-secondary" type="reset" value="Reset"/>
                    </form>
                </div>

                <div className="col-sm-2">

                </div>
            </div>
        </div>

    )
};

export default AddRes;