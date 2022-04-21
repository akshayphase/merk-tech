import image from './assets/svg/page6.svg'
import image1 from './assets/svg/Neon3page6.svg'


const Page6 = () =>  {
    return(

        <div className="page">

            <div className="pattern"></div>

            <div className="Container tocenter">
                <div className="subcont second">
                    <div className="sideitem tocenter">
                       <div className="displaygrid alignleft">
                       <img src={image} className="imgresponsive"></img>
                       <img src={image1}  className="imgresponsive crooked" style={{top: '250px'}}></img>
                       </div>
                    </div>

                    <div className="text">
                        <div className="titletop" style={{color:'#FFBF5F'}}>SMART CONTRACT</div>
                        <div className="title">
                        Experience the Revolution
                        </div>
                        <div className="detail1">
                            Merklabs has efficient developers with exceptional coding skills that can create any type of smart contract you desire and with scalable and secure code. You desire, we create it for you.                        </div>
                    </div>
                </div>
            </div>


        </div>
    );

}
export default Page6;