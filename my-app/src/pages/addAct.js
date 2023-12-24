import {useState} from "react";
import { useNavigate } from "react-router-dom";
const AddRes = () => {
    const [activity, setActivity] = useState();
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await fetch('https://api.airtable.com/v0/app83mzQj8FltIJb7/Activities', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer patiDHyd3qCh9HKUL.8d3f0bf8dbfa7197388bac6f9f03ceab98d68ec6d9cf65d7d87cacd75e76bcad'
                },
                body: JSON.stringify({"fields": {"Activities": activity}})
            });
            const status = response.status;
            const responseJson = await response.json();
            console.log('responseJson', responseJson);
            if (status === 200) {
                alert('Successfully Added Activity to List');
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
                    <h1>Add an Activity Below</h1>
                    <p>Use the form below to add an activity to the list.</p>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="rest">Activity</label>
                                <input className="form-control" type="text" id="rest" name="rest" value={activity}
                                       onChange={(e) => setActivity(e.target.value)}/>
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