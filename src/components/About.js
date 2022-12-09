import Counter from "./Counter";
const About = ({ dark }) => {
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img src={`img/about/${dark ? 2 : 1}.jpg`} alt="image" />
                <div className="numbers year">
                  <div className="wrapper">
                  <span className="name">
                      Teaching 
                      <br />
                      For 
                    </span>
                    <h3>
                      <Counter end={20} />
                    </h3>
                    <span className="name">
                      Years
              
                    </span>
                    
                    
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={230} />
                    </h3>
                    <span className="name">
                      Total
                      <br />
                      Pepers
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm a Professor`}</span>
                <h3>I Can Teach Anything You Want</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {`Hello there, I am a Professor and I'm very passionate and
                  dedicated to my work With 20 years experience as a 
                  Professor. I develop efficient algorithms and tools for core
                  computational problems such as satisfiability modulo theories 
                  (SMT) solving , model counting , and syntax-guided synthesis.`}
                </p>
              </div>
              <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="#contact">
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;
