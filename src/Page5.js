import image from './assets/svg/page5.svg'

const Page5 = () =>  {
    return(

        <div className="page">

            <div className="pattern"></div>

            <div className="Container tocenter">
                <div className="subcont first">

                <div className="text">
                        <div className="titletop" style={{color: '#618DFF'}}>EXPERT</div>
                        <div className="title">
                            Expert Review
                        </div>
                        <div className="detail1">
                        Experience the guidance of various trained professionals and developers who are with you at every phase of your projects. We not only develop your project but also give out the best recommendations for turning it into a huge success
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
export default Page5;