const Partners = (props) => {
  return (
    <div className="partners-container-outer">
      <div className="partners-header">
        <h1>Partners</h1>
      </div>
      <div className='partners-body'>
        {props.partners.map((partner) => (
          <div className="partner-container">
            <img className="logo" src={partner.logo}></img>
            <div className="partner-information">
              <div className="address">
                <h3>
                  <strong>{partner.name}</strong>
                  <br></br>
                  {partner.addressline1}
                  <br></br>
                  {partner.addressline2}
                  <br></br>
                  {partner.addressline3}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
