import LogoName from './assets/svg/Glass.svg'
import image from './assets/svg/page1bar.svg'
import image1 from './assets/svg/ellipse.svg'

const Page1 = () =>  {
    return(

        <div className="page">

            <div className="pattern"></div>

            <div className="Container tocenter">
                <div className="subcont main">
                    <div className="text">
                        <div className="title">
                            We provide The Best to Protect Your Users And Their Investments
                        </div>
                        <div className="detail">
                            Merklabs is a reputed name in the field of blockchain technology encompassing all the segments of this revolutionary field. Pioneering the essence of blockchain security and audits we secure your present and future through the parameters of technology.
                        </div>
                    </div>
                    <div className="sideitem tocenter">
                       <div className="displaygrid alignleft margintop" style={{position: 'relative'}}>
                       <img src={LogoName} className="image" alt="logo"/>
                       <img src={image} className="page1bar"></img>
                       <img src={image1} className="page1ellipse"></img>
                       
                        <div className="item">
                                <div className="itemchild1">100+</div>
                                <div className="itemchild2">Blockchain companies protected</div>
                            </div>
                            <div className="item">
                                <div className="itemchild1">200+</div>
                                <div className="itemchild2">Products Delivered</div>
                            </div>
                            <div className="item">
                                <div className="itemchild1">1000+</div>
                                <div className="itemchild2">Analyses available per month</div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>


        </div>
    );

}
export default Page1;