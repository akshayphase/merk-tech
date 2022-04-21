import image from './assets/svg/page4.svg'
import image1 from './assets/svg/Neon2page4.svg'


const Page4 = () =>  {
    return(

        <div className="page">

            <div className="pattern"></div>

            <div className="Container tocenter">
                <div className="subcont second">
                    <div className="sideitem tocenter">
                       <div className="displaygrid alignleft">
                       <img src={image}  className="imgresponsive"></img>

                       </div>
                    </div>

                    <div className="text">
                    <img src={image1}  className="imgresponsive crooked1"></img>
                        <div className="titletop" style={{color:'#4effbf'}}>AUDIT</div>
                        <div className="title">
                            Stay secure and safe
                        </div>
                        <div className="detail1">
                            Above all that matters is a secure and safe smart contract that is free from any vulnerability and does not hamper the investment of the various people who have trusted you. We also provide auditing services, so that you can stay assured of the security as we are quick in auditing and exposing the bugs of your smart contract.
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );

}
export default Page4;