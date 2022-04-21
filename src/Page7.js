import image from './assets/svg/page7.svg'

const Page7 = () =>  {
    return(

        <div className="page">

            <div className="pattern"></div>

            <div className="Container tocenter">
                <div className="subcont first" >

                <div className="text">
                        <div className="titletop" style={{color: '#4EFFBF'}}>LAUNCHPAD</div>
                        <div className="title">
                            Stabilize and Promote
                        </div>
                        <div className="detail1">
                            Amidst the competition in the Defi space, good marketing strategy and implementation plays the key role to stabilize and promote your growth in the blockchain industry. Retaining this awareness, we can develop launchpad and IDO for your presale and ICO. 
                        </div>
                    </div>


                    <div className="sideitem tocenter">
                       <div className="displaygrid alignleft">
                       <img src={image}  className="imgresponsive"></img>

                       </div>
                    </div>


                </div>
            </div>


        </div>
    );

}
export default Page7;