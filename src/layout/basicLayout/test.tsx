import React, { useState, useEffect, useRef, Fragment } from 'react';



// function Count () {
//     const [ count ,setCount ] = useState(0)
//     const countRef = useRef(count);
//     console.log(count,'count')

//     useEffect(() => {
//         // 及时更新 count 值
//         countRef.current = count;  
//       });
//     useEffect(()=>{
//         console.log('bbbb',count)
//         // let timer = setInterval(()=>{
//         //     console.log('aaa',countRef)
//         //     // setCount(count +1)
//         //     setCount(val => val + 1)
//         // },1000)
//         // return ()=>clearInterval(timer)
//     },[])
//     return <div>
//         <p>{count}</p>
//     </div>
// }
// 产品名称列表
const nameList = ['apple', 'peer', 'banana', 'lemon']

const Count = () => {
    // 产品名称、价格
    const [price, setPrice] = useState(0)
    const [name, setName] = useState('apple')
  
    // 假设有一个业务函数  获取产品的名字
    function getProductName() {
        console.log('getProductName触发')
        return name
    }
    // 只对name响应
    useEffect(() => {
        console.log('name effect 触发')
        getProductName()
    }, [name])
    
    // 只对price响应
    useEffect(() => {
        console.log('price effect 触发')
    }, [price])
    return (
        <Fragment>
            <p>{name}</p>
            <p>{price}</p>
            <p>{getProductName()}</p>
            <button onClick={() => setPrice(price+1)}>价钱+1</button>
            <button onClick={() => setName(nameList[Math.random() * nameList.length << 0])}>修改名字</button>
        </Fragment>
    )
}
export {
    Count
}