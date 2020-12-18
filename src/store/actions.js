import { ADD_CART } from './actions-types'
import { ADD_COUNTER, ADD_TO_CART } from './mutaions-types'

export default {
    [ADD_CART](context, payload) {
        return new Promise((resolve, reject) => {
            // payload新添加的商品
            // let oldProdect = null
            // for (let item of state.cartList) {
            //     if (item.iid === payload.iid) {
            //         oldProdect = item
            //     }
            // }
            let oldProdect = context.state.cartList.find(item => item.iid === payload.iid)

            // 2.判断oldProduct
            if (oldProdect) {
                // oldProdect.count += 1
                context.commit(ADD_COUNTER, oldProdect)
                resolve('添加商品数量')
            } else {
                payload.count = 1
                payload.checked = true
                // state.cartList.push(payload)
                context.commit(ADD_TO_CART, payload)
                resolve('添加新商品')
            }
        })
    }
}