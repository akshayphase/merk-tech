import image from './assets/svg/page3.svg'

const Page3 = () =>  {
    return(

        <div className="page">

            <div className="pattern"></div>

            <div className="Container tocenter">
                <div className="subcont first">

                <div className="text">
                        <div className="titletop" style={{color: '#FFBF5F'}}>DAPPS</div>
                        <div className="title">
                            Technology made easier
                        </div>
                        <div className="detail1">
                            Decentralized application have found a huge user base right in the initial stage, and therefore we as a team have gained extensive expertise into creation of dapps.
                        </div>
                    </div>


                    <div className="sideitem tocenter">
                       <div className="displaygrid alignleft">
                        <img src={image} className="imgresponsive"></img>

                       </div>
                    </div>


                </div>
            </div>


        </div>
    );

}
export default Page3;