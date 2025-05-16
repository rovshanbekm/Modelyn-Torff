import Button from "./Button"

function Card() {
    return(
        <div>
            <div className="cards">
                <div className="card-info">
                    <div className="card-title">
                        <h2>Project Name</h2>
                        <p>I created this personal project in order to show <br /> how to create an interface in Figma using a <br />
                         portfolio as an example.</p>
                         <Button />
                    </div>
                    <img className="info__img" src="/pexels-elly-fairytale-3823207 1.png" alt="" />
                </div>
                <div className="card-info">
                    <img className="info__img1" src="/Rectangle 7.png" alt="" />
                    <div className="card-title1">
                        <h2>Project Name</h2>
                        <p>I created this personal project in order to show <br /> how to create an interface in Figma using a <br />
                         portfolio as an example.</p>
                         <Button />
                    </div>
                </div>
                <div className="card-info">
                    <div className="card-title">
                        <h2>Project Name</h2>
                        <p>I created this personal project in order to show <br /> how to create an interface in Figma using a <br />
                         portfolio as an example.</p>
                         <Button />
                    </div>
                    <img className="info__img" src="/Rectangle 7 (1).png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Card