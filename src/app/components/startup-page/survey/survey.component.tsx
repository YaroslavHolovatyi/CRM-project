import surveyImage from '../../../../assets/SurveyImage.png'
import { Button } from 'antd';
import './survey.component.scss'

export default function Survey(){
    return(
        <>
                <div className="survey">
                    <div className="survey__content">
                        <div className="survey__content--logo">
                            <img src={surveyImage} alt="Survey Image Michael Scott" />
                        </div>
                        <div className="survey__content--main-text">
                            <h2>DunderCRM</h2>
                        </div>
                        <div className="survey__content--subtext">
                            <h5>Sales Hub</h5>
                        </div>
                        <div className="survey__content--button">
                            <Button color='cyan' variant='solid'>Explore</Button>
                        </div>
                    </div>
                </div>
        </>
    )
        
}