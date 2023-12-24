import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="container-fluid text-center">
            <div className="row content">
                <div className="col-md-2"></div>
                <div className="col-md-8 text-left">
                    <h1>Merry Christmas Laura</h1>
                    <p>Merry Christmas Laura. I hope you are having a good holiday. This is your gift. It took me a lot longer then I am willing to admit. I hope you enjoy this gift. I had a lot of words when it didn't want to work at first, but I was finally able to make it work. This gift has a few parts. The first is the <Link to="/coin">coin flip page</Link>. This allows you to flip a coin, and you don't have to ask Siri. The second part is the better part in my opinion. It gives you ideas for what restaurant to go to or an activity to do together. You can go to that <Link to="/choose">page here</Link>. I hope you like your gift and it comes in handy. Now is the part where you hug me. </p>
                    <hr/>
                </div>

            </div>
            <div className="col-md-2"></div>
        </div>
    )
};

export default Home;
