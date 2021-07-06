import React, { Component } from 'react'
import {CommodityListStyled} from './styled/commodityList'

export default class commodityList extends Component {
    render() {
        return (
            <CommodityListStyled>
                <div>
                    商品列表
                </div>
            </CommodityListStyled>
        )
    }
}
