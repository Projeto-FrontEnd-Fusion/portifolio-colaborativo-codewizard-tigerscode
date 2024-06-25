export default function AboutCard({Img, Title, Text}) {

    const textarea = Text.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
    ));
    

    return(
        <div className="aboutProject__Card">
            <div className="aboutproject__Card--Img">
                <img src={Img} alt="Icone" />
            </div>
            <div className="aboutProject__Card--Text">
                <h3>{Title}</h3>
                <p>{textarea}</p>
            </div>
        </div>
    )
}