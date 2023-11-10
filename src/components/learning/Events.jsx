const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou evento");
    };

    const renderSomething = (x) => {
        if(x) {
            return <h1> Render um! </h1>
        } else {
            return <h1> Render dois! </h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("clicou inline")}>Inline Event!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events;