import React from "react"
import DetailsHeader from "../../../components/PubHeader"
import Swiper from "../../../components/Swiper"
import "./style.less"
import BuyAndStore from "../BuyAndStore"
import Tabs from "../../../components/Tabs"
import Comment from "../Comment"

const DetailsView = (props) => {
    let detailsData = props.detailsData
    return (
        <div>
            <DetailsHeader title={'详情页'} />
            <div>
                <Swiper banners={detailsData.imgs} />
                <Tabs>
                    <div label="详情" >
                        <div className="detail-info">
                            <h3>{detailsData.title}</h3>
                            <h4>SGD {detailsData.price}</h4>
                        </div>
                        <BuyAndStore id={props.id} />
                    </div>
                    <div label="评价">
                        <Comment id={props.id} />
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default DetailsView