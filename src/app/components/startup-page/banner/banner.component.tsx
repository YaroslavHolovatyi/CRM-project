import BannerImage from '../../../../assets/BannerImage.png';
import './banner.component.scss'

function Banner(){

    return(
        <div className="banner">
            <div className="banner__image">
                <img src={BannerImage} alt="Team Banner Image" />
            </div>
        </div>
    )

}

export default Banner;
