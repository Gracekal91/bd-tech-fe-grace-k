import CardList from "../components/CardList";


const cardType = {
    type: "overview",
    url: '/profiles'
};

const Overview = () => {
    return (
        <div className="dwa-container">
            <CardList cardType={cardType}/>
        </div>
    )
}

export default Overview;