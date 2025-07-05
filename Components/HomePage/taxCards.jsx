import Image from "next/image";

const TaxCards = (props) => {
    return (<div className="row justify-content-center">
        <div className="col-lg-10">
            <div className="row">
                {props.data.map((card, index) => (
                    <div className="col-lg-4 mb-4 mb-lg-0" key={index}>
                        <div className="taxCard">
                            <Image
                                src={card.image}
                                alt={card.alt}
                                width={183}
                                height={174}
                            />
                            <h4 className="heading54 mb-3 taxHeading">
                                <span className="sky">{card.title}</span><br />{card.subtitle}
                            </h4>
                            <p className="sub16">{card.description}</p>
                            <button className="blueBtn w-100 mt-auto">{card.buttonText}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>)
}

export default TaxCards;