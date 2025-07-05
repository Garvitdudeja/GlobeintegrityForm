const { default: Image } = require("next/image")

const KeyBenifits = ({data}) => {
    console.log(data, "data")
    return (<section className="benifit">
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='heading54 text-center'>
                        {data.heading}
                    </h1>
                </div>
            </div>
            <div className='row'>
                {data.Cards.map(item=><div className='col-lg-4 mb-4 mb-lg-0' key={item.heading}>
                    <div className="benifitCard text-center">
                        <Image src={item.image} alt='image' className='img-fluid' />
                        <h3 className='heading28'>{item.heading}</h3>
                        <p className='sub18'>{item.description}</p>
                    </div>
                </div>)}

                <div className='col-12 text-center my-5'>
                    <button className='commonBtnBig text-uppercase'>{data.buttonText}</button>
                </div>
            </div>
        </div>
    </section>)
}

export default KeyBenifits;