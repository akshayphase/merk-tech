import image from './assets/svg/page2.svg'
import image1 from './assets/svg/Neon1page2.svg'

const Page2 = () =>  {
    return(

        <div className="page">

            <div className="pattern"></div>

            <div className="Container tocenter">
                <div className="subcont second">
                    <div className="sideitem tocenter">
                       <div className="displaygrid alignleft">
                            <img src={image} className="imgresponsive"></img>
                            <img src={image1} className="imgresponsive crooked"></img>

                       </div>
                    </div>

                    <div className="text">
                        <div className="titletop" style={{color: '#FF6392'}}>DEFI</div>
                        <div className="title">
                            Scale the world of DeFi
                        </div>
                        <div className="detail1">
                            Merklabs is a reputed name in the field of blockchain technology encompassing all the segments of this revolutionary field. Pioneering the essence of blockchain security and audits we secure your present and future through the parameters of technology.
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );

}
export default Page2;